import React from "react";
import storeImage from "../assets/store.jpg";

function About() {
  return (
    <section className="pt-20 pb-12 px-6 md:px-12" id="propos">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* Image */}
        <div className="flex">
          <img
            src={storeImage}
            alt="Store Highlight"
            className="w-full h-auto max-h-[420px] md:max-h-[480px] rounded-3xl shadow-2xl object-cover"
          />
        </div>

        {/* Texte */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">À propos de nous</h2>

          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Notre Store propose une sélection variée de produits de qualité :
            accessoires, objets pratiques et articles inspirants pour le
            quotidien. Chaque article est soigneusement choisi pour allier
            utilité, style et durabilité. Nous mettons un point d’honneur à
            offrir des produits qui facilitent votre vie tout en apportant une
            touche d’élégance. Que vous recherchiez un objet fonctionnel ou une
            idée cadeau originale, vous trouverez chez nous une expérience
            d’achat agréable, fiable et unique.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
