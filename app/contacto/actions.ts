"use server";

export async function sendContactEmail(prevState: any, formData: FormData) {
  // Listo para integrar con Resend
  // const nombre = formData.get('nombre');
  // const email = formData.get('email');
  
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simula delay
  return { success: true, message: '¡Mensaje enviado con éxito! Nos pondremos en contacto.' };
}
