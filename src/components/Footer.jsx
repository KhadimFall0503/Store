import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo et description */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-white">Store</h1>
            <p className="max-w-xs text-gray-400">
              Découvrez nos meilleurs produits et profitez d’une expérience
              shopping moderne et agréable.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-white">Liens rapides</h3>
            <a href="#" className="hover:text-white transition">
              Accueil
            </a>
            <a href="#categories" className="hover:text-white transition">
              Catégories
            </a>
            <a href="#" className="hover:text-white transition">
              À propos
            </a>
            <a href="#" className="hover:text-white transition">
              Contactez-nous
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <p>Email: khadimfall0503@gmail.com</p>
            <p>Téléphone: +221 77 345 79 34</p>
            <p>Adresse: Dakar, Sénégal</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} MonShop. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
