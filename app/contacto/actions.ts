"use server";
import { Resend } from 'resend';

export async function sendContactEmail(prevState: any, formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable");
    return { success: false, message: 'Error de configuración del servidor. Falta API Key.' };
  }
  
  const resend = new Resend(apiKey);
  
  const nombre = formData.get('nombre') as string;
  const email = formData.get('email') as string;
  const servicio = formData.get('servicio') as string;
  const mensaje = formData.get('mensaje') as string;

  if (!nombre || !email || !mensaje) {
    return { success: false, message: 'Por favor, rellena todos los campos obligatorios.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'hola@sherryleads.com',
      replyTo: email,
      subject: `Nuevo lead de Sherry Leads: ${nombre} (${servicio})`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Servicio:</strong> ${servicio}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, message: 'Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.' };
    }

    return { success: true, message: '¡Mensaje enviado con éxito! Nos pondremos en contacto.' };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { success: false, message: 'Ocurrió un error inesperado.' };
  }
}
