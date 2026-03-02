import dotenv from "dotenv";
dotenv.config();

console.log("RESEND KEY:", process.env.RESEND_API_KEY);

import express, { Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.use(express.urlencoded({ extended: false }));

// logger
function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString();
  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    if (req.path.startsWith("/api")) {
      log(`${req.method} ${req.path} ${res.statusCode} in ${Date.now() - start}ms`);
    }
  });

  next();
});

(async () => {
  // ✅ API routes
  await registerRoutes(app);

  // ✅ error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    res.status(err.status || 500).json({
      message: err.message || "Internal Server Error",
    });
  });

  // ✅ FRONTEND CONNECTION (ESTO FALTABA BIEN)
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  const port = Number(process.env.PORT) || 5000;

  httpServer.listen(port, () => {
    log(`Server running on http://localhost:${port}`);
  });
})();