import { Express, Request, Response } from "express";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export function registerRoutes(app: Express) {

  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const { nombreApellido, telefono, consulta } = req.body;

      await resend.emails.send({
        from: "AM Design Lab <contacto@amdesignlab-ar.com>",
        to: "contacto@amdesignlab-ar.com",
        subject: "Nueva consulta desde la web",
        html: `
          <h2>Nueva consulta</h2>
          <p><b>Nombre:</b> ${nombreApellido}</p>
          <p><b>Teléfono:</b> ${telefono}</p>
          <p>${consulta}</p>
        `,
      });

      res.json({ success: true });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error enviando mail" });
    }
  });

}