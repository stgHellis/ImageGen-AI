"use client";

import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { sendContactForm } from "../actions/contactActions";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("Envoi en cours...");
    setErrors({});

    const formDataToSend = new FormData(e.currentTarget);
    const result = await sendContactForm(formDataToSend);

    if (result.success) {
      setSubmitStatus(result.message || "Message envoyé avec succès");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(result.errors || {});
      setSubmitStatus(
        result.message || "Échec de l'envoi. Veuillez réessayer."
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow flex flex-col items-center p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <section className="w-full max-w-5xl py-16">
          <h1 className="text-5xl font-extrabold mb-10 text-center">
            Contactez-nous
          </h1>
          <div className="bg-gradient-to-r from-gray-100 to-purple-200 text-blue-500 p-8 rounded-lg shadow-lg">
            <p className="text-lg mb-6">
              Nous sommes là pour répondre à toutes vos questions.
              N&apos;hésitez pas à nous contacter par l&apos;un des moyens
              suivants :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Informations de contact
                </h2>
                <p className="mb-2">
                  <strong>Email :</strong> contact@stghellis.com
                </p>
                <p className="mb-2">
                  <strong>Téléphone :</strong> +33 1 23 45 67 89
                </p>
                <p className="mb-2">
                  <strong>Adresse :</strong> 123 Rue de l&apos;Innovation, 75001
                  Paris, France
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Heures d&apos;ouverture
                </h2>
                <p className="mb-2">
                  <strong>Lundi - Vendredi :</strong> 9h00 - 18h00
                </p>
                <p className="mb-2">
                  <strong>Samedi :</strong> 10h00 - 14h00
                </p>
                <p>
                  <strong>Dimanche :</strong> Fermé
                </p>
              </div>
            </div>
            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${
                    errors.name ? "border-red-500" : "border-blue-300"
                  }`}
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name[0]}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${
                    errors.email ? "border-red-500" : "border-blue-300"
                  }`}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full p-2 border rounded ${
                    errors.message ? "border-red-500" : "border-blue-300"
                  }`}
                  required
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message[0]}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              >
                Envoyer
              </button>
              {submitStatus && (
                <p className="mt-4 text-center font-semibold">{submitStatus}</p>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
