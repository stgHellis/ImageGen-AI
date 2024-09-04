"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

// Schéma de validation Zod
const ContactSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("L'email est invalide"),
  message: z.string().min(1, "Le message est requis"),
});

// Configuration du transporteur Nodemailer (à ajuster selon votre service d'e-mail)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "587"),
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendContactForm(formData: FormData) {
  // Extraction et validation des données
  const validatedFields = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  // Si la validation échoue, retourner les erreurs
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    // Envoi de l'e-mail
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "Nouveau message de contact",
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Nom:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return {
      success: true,
      message: "Votre message a été envoyé avec succès !",
    };
  } catch (error) {
    console.error("Erreur d'envoi d'e-mail:", error);
    return {
      success: false,
      message: "Une erreur est survenue lors de l'envoi du message.",
    };
  }
}
