import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow flex flex-col items-center p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <section className="w-full max-w-5xl py-16">
          <h1 className="text-5xl font-extrabold mb-10 text-center">
            À propos d&apos;ImageGen AI
          </h1>
          <div className="bg-gradient-to-r from-gray-100 to-purple-200 text-blue-500 p-8 rounded-lg shadow-lg">
            <p className="text-lg mb-6">
              ImageGen AI est à l&apos;avant-garde de la technologie de
              génération d&apos;images par intelligence artificielle. Notre
              mission est de démocratiser la création d&apos;images de haute
              qualité pour tous, des professionnels aux amateurs passionnés.
            </p>
            <p className="text-lg mb-6">
              Fondée en 2023, notre entreprise réunit une équipe d&apos;experts
              en IA, en design et en développement logiciel. Nous sommes
              passionnés par l&apos;innovation et nous nous efforçons
              constamment d&apos;améliorer notre technologie pour offrir les
              meilleurs résultats possibles à nos utilisateurs.
            </p>
            <h2 className="text-3xl font-semibold mb-4">Notre vision</h2>
            <p className="text-lg mb-6">
              Nous croyons que la créativité ne devrait pas être limitée par les
              compétences techniques. Avec ImageGen AI, nous visons à donner à
              chacun les outils pour transformer ses idées en images
              saisissantes, rapidement et facilement.
            </p>
            <h2 className="text-3xl font-semibold mb-4">Notre engagement</h2>
            <p className="text-lg">
              Chez ImageGen AI, nous nous engageons à fournir un service de
              qualité supérieure, à respecter la confidentialité de nos
              utilisateurs et à contribuer à l&apos;évolution éthique de
              l&apos;IA dans le domaine de la création visuelle.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
