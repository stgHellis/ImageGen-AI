"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Pricing() {
  //
  const [selectedOption, setSelectedOption] = useState("standard");

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const generationOptions = [
    {
      title: "Standard",
      description: "Génération d'images de haute qualité",
      price: "19,99 €/mois",
      features: [
        "Jusqu'à 100 images/mois",
        "Résolution 1024x1024",
        "Styles variés",
      ],
    },
    {
      title: "Pro",
      description: "Pour les créateurs exigeants",
      price: "39,99 €/mois",
      features: [
        "Jusqu'à 500 images/mois",
        "Résolution 2048x2048",
        "Styles personnalisés",
        "Assistance prioritaire",
      ],
    },
    {
      title: "Ultimate",
      description: "Pour les professionnels du Design",
      price: "99,99 €/mois",
      features: [
        "Jusqu'à 1200 images/mois",
        "Images illimitées",
        "une suite complète d'outils d'édition",
        "Assistance téléphonique 24/7",
        "Outils AI personnalisés",
      ],
    },
    {
      title: "Entreprise",
      description: "Solutions sur mesure pour votre entreprise",
      price: "Sur devis",
      features: [
        "Volume illimité",
        "Résolution 4K",
        "API dédiée",
        "Intégration personnalisée",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow flex flex-col items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <header className="w-full max-w-5xl text-center py-16">
          <h1 className="text-6xl font-extrabold mb-6">Tarification</h1>
          <p className="text-2xl mb-10">
            Choisissez le plan qui vous convient le mieux.
          </p>
        </header>
        <section className="w-full max-w-6xl px-4 mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Nos options de génération
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {generationOptions.map((option) => (
              <div
                key={option.title}
                className={`bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-lg transition duration-300 ${
                  selectedOption === option.title.toLowerCase()
                    ? "border-4 border-yellow-400"
                    : ""
                }`}
                onClick={() => handleOptionChange(option.title.toLowerCase())}
              >
                <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                <p className="text-lg mb-4">{option.description}</p>
                <p className="text-3xl font-bold mb-6">{option.price}</p>
                <ul className="text-left">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <svg
                        className="w-5 h-5 mr-2 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
