"use client";

import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { generateImage } from "../actions/imageActions";
import Image from "next/image";

export default function GenerateImage() {
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [model, setModel] = useState("dalle-3");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const result = await generateImage(prompt, model);
      if (result.success && result.imageUrl) {
        setGeneratedImage(result.imageUrl);
      } else {
        setError(
          result.message ||
            "Une erreur est survenue lors de la génération de l'image."
        );
      }
    } catch (err) {
      setError("Une erreur inattendue s'est produite.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="bg-gradient-to-r from-blue-500 to-purple-600 flex-grow flex p-4">
        <div className="w-1/2 pr-4">
          <h1 className="text-3xl font-bold mb-6">Générer une image</h1>
          <form onSubmit={handleSubmit} className="w-full">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4 text-gray-600"
              rows={4}
              placeholder="Décrivez l'image que vous souhaitez générer..."
              required
            />
            <div className="mb-4">
              <label className="block mb-2">Choisissez le modèle :</label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-gray-600"
              >
                <option value="dalle-3">DALL-E 3</option>
                <option value="dalle-2">DALL-E 2</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white p-2 rounded hover:bg-blue-600 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? "Génération en cours..." : "Générer l'image"}
            </button>
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
        <div className="w-1/2 pl-4 flex items-center justify-center">
          {generatedImage ? (
            <Image
              src={generatedImage}
              alt="Image générée"
              width={512}
              height={512}
              className="max-w-full h-auto"
            />
          ) : (
            <div className="text-gray-300 text-center text-3xl">
              L&apos;image générée apparaîtra ici
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
