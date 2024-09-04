import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow flex flex-col items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <header className="w-full max-w-5xl text-center py-16">
          <h1 className="text-6xl font-extrabold mb-6">
            Bienvenue à ImageGen AI
          </h1>
          <p className="text-2xl mb-10">
            Générez des images incroyables avec notre technologie AI de pointe.
          </p>
          <a
            href="/generate"
            className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-full transition-colors hover:bg-gray-200"
          >
            Commencez maintenant
          </a>
        </header>
        <section id="features" className="w-full max-w-5xl py-16">
          <h2 className="text-4xl font-semibold mb-10 text-center">
            Caractéristiques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-r from-gray-200 to-purple-200 text-blue-500 p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-6">Facile à utiliser</h3>
              <p>
                Notre interface utilisateur intuitive vous permet de générer des
                images en quelques clics.
              </p>
            </div>
            <div className="bg-gradient-to-r from-gray-200 to-purple-200 text-blue-500 p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-6">Haute qualité</h3>
              <p>
                Obtenez des images de haute qualité grâce à notre technologie AI
                avancée.
              </p>
            </div>
            <div className="bg-gradient-to-r from-gray-200 to-purple-200 text-blue-500 p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-6">Rapide et efficace</h3>
              <p>
                Générez des images en un temps record avec notre infrastructure
                optimisée.
              </p>
            </div>
            <div className="bg-gradient-to-r from-gray-200 to-purple-200 text-blue-500 p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-6">
                Génération instantanée
              </h3>
              <p>
                Obtenez vos images en quelques secondes grâce à notre
                technologie de génération instantanée.
              </p>
            </div>
            <div className="bg-gradient-to-r from-gray-200 to-purple-200 text-blue-500 p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-6">Style personnalisable</h3>
              <p>
                Personnalisez le style de vos images selon vos besoins et
                préférences.
              </p>
            </div>
            <div className="bg-gradient-to-r from-gray-200 to-purple-200 text-blue-500 p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-6">Édition facile</h3>
              <p>Modifiez facilement vos images avec notre éditeur intégré.</p>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="bg-gradient-to-r from-gray-200 to-purple-200 w-full max-w-5xl py-16 text-blue-500 rounded-lg shadow-lg"
        >
          <h2 className="text-4xl font-semibold mb-10 text-center">
            Témoignages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="italic text-lg">
                &ldquo;ImageGen AI a transformé notre flux de travail. Les
                images générées sont incroyables et nous font gagner un temps
                précieux.&rdquo;
              </p>
              <p className="mt-6 font-bold">- Jean Dupont, Designer</p>
            </div>
            <div>
              <p className="italic text-lg">
                &ldquo;Je suis impressionné par la qualité des images générées.
                C&apos;est un outil indispensable pour notre équipe
                marketing.&rdquo;
              </p>
              <p className="mt-6 font-bold">
                - Marie Curie, Responsable Marketing
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
