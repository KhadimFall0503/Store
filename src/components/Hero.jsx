import React from "react";
import backgroundImage from "../assets/shoping.jpg";
import { ShoppingBag } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[80vh] flex items-center px-6 md:px-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      id="home"
    >
      {/* Overlay sombre + gradient pour lisibilité */}
      <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/40 to-black/70"></div>

      {/* Contenu */}
      <div className="relative z-10 max-w-3xl text-left text-white space-y-4 font-outfit">
        <h1 className="text-3xl md:text-5xl font-bold font-montserrat leading-snug tracking-tight">
          Découvrez votre boutique
          <br />
          et aimez ce que vous achetez
        </h1>
        <p className="text-gray-200 md:text-base leading-relaxed ">
          Explorez notre sélection tendance et profitez des meilleures offres.
          Que vous cherchiez des vêtements, des accessoires, de l’électronique
          ou des articles pour la maison, nous avons tout ce qu’il vous faut.
        </p>
        <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-8 py-3 rounded-full font-semibold hover:from-yellow-300 hover:to-yellow-500 flex items-center justify-center transition duration-300 shadow-xl">
          Acheter Maintenant
          <ShoppingBag className="ml-2" size={22} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
