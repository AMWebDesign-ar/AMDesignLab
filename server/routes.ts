import { Resend } from "resend";
import { Express, Request, Response } from "express";

export function registerRoutes(app: Express) {

  app.post("/api/contact", async (req: Request, res: Response) => {
  try {

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { nombreApellido, email, telefono, consulta } = req.body;

    // MAIL PARA VOS
    await resend.emails.send({
      from: "AM Design Lab <contacto@amdesignlab-ar.com>",
      to: "contacto@amdesignlab-ar.com",
      subject: "Nueva consulta desde la web",
      html: `
        <h2>Nueva consulta</h2>
        <p><b>Nombre:</b> ${nombreApellido}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Teléfono:</b> ${telefono}</p>
        <p>${consulta}</p>
      `,
    });

    // MAIL AUTOMÁTICO AL CLIENTE
    await resend.emails.send({
      from: "AM Design Lab <contacto@amdesignlab-ar.com>",
      to: email,
      subject: "Recibimos tu consulta ✔",
      html: `
        <p>Hola ${nombreApellido},</p>
        <p>Recibimos tu consulta correctamente.</p>
        <p>Te responderemos pronto.</p>
      `,
    });

    res.json({ success: true });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error enviando mail" });
    console.log("Formulario recibido:", req.body);
  }
});
}