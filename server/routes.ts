import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    const result = insertContactMessageSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ message: "Datos inválidos", errors: result.error.flatten() });
    }
    try {
      const message = await storage.createContactMessage(result.data);
      return res.status(201).json(message);
    } catch (error) {
      console.error("Error saving contact message:", error);
      return res.status(500).json({ message: "Error al guardar el mensaje" });
    }
  });

  return httpServer;
}
