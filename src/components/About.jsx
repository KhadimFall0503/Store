import React from "react";
import storeImage from "../assets/store.jpg"; // remplace par ton image

function About() {
  return (
    <section
      className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-8 px-6 md:px-12"
      id="propos"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image à gauche */}
        <div className="flex justify-center md:justify-start">
          <img
            src={storeImage}
            alt="Store Highlight"
            className="w-full h-96 max-w-sm md:max-w-md rounded-3xl shadow-2xl object-cover"
          />
        </div>

        {/* Texte à droite */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
            A propos de Nous
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Notre Store propose une sélection variée de produits de qualité :
            accessoires, objets pratiques et articles inspirants pour le
            quotidien. Chaque article est soigneusement choisi pour allier
            utilité, style et durabilité, afin de répondre à vos besoins tout en
            vous offrant une expérience d’achat agréable et unique.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
