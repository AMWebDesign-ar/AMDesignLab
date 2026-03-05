import { Resend } from "resend";
import { Express, Request, Response } from "express";

export function registerRoutes(app: Express) {

  app.post("/api/contact", async (req: Request, res: Response) => {
  try {

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { nombreApellido, email, telefono, consulta } = req.body;

    await resend.emails.send({
      from: "AM Design Lab <contacto@amdesignlab.com.ar>",
      to: "contacto@amdesignlab.com.ar",
      subject: "Nueva consulta desde la web",
      html: `
        <h2>Nueva consulta</h2>
        <p><b>Nombre:</b> ${nombreApellido}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Teléfono:</b> ${telefono}</p>
        <p>${consulta}</p>
      `,
    });

    await fetch("https://script.google.com/macros/s/AKfycbzS8MuWVBWqCa3G0U0kaf01viac8iPR1lkDVzBDUSf5MvC_Kz1vNvMqMf9mGL62VqzYLw/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombreApellido,
          email,
          telefono,
          consulta,
        }),
      });

    await resend.emails.send({
      from: "AM Design Lab <contacto@amdesignlab.com.ar >",
      to: email,
      subject: "Recibimos tu consulta ✔",
      html: `
        <p>Hola ${nombreApellido},</p>
        <p>Recibimos tu consulta correctamente.</p>
        <p>Te responderemos pronto.</p>
        <p></p>
        <p>Atte.</p>
        <p>Equipo de AM Design Lab</p>
      `,
    });

    res.json({ success: true });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error enviando mail" });
    
  }
});
}