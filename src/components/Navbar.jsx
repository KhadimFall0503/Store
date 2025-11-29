import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white shadow-md font-inter z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo principal */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-2 rounded-full flex items-center justify-center">
            <ShoppingCart size={28} className="text-white" />
          </div>
          {/* Texte logo visible sur tous les écrans, taille responsive */}
          <span className="text-white text-sm sm:text-xl font-outfit font-bold tracking-tight">
            XadimStore
          </span>
        </div>

        {/* Onglets à droite pour desktop */}
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#home" className="hover:text-yellow-400 transition-colors">
            Accueil
          </a>
          <a href="#propos" className="hover:text-yellow-400 transition-colors">
            A propos
          </a>
          <a
            href="#services"
            className="hover:text-yellow-400 transition-colors"
          >
            Services
          </a>
          <a
            href="#categories"
            className="hover:text-yellow-400 transition-colors"
          >
            Catégories
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-400 transition-colors"
          >
            Contact
          </a>

          {/* Panier desktop */}
          <button
            onClick={() => navigate("/cart")}
            className="relative hover:text-yellow-400 transition duration-200"
            title="Panier"
          >
            <ShoppingCart size={28} />
            <span className="absolute -top-1 -right-2 bg-yellow-600 text-white text-xs font-semibold px-1.5 rounded-full">
              2
            </span>
          </button>
        </nav>

        {/* Menu mobile */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-800 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav className="md:hidden bg-black text-white text-center flex flex-col gap-2 py-2 border-t border-gray-800">
          <a href="#home" className="py-2 hover:bg-gray-800 transition">
            Accueil
          </a>
          <a href="#propos" className="py-2 hover:bg-gray-800 transition">
            A propos
          </a>
          <a href="#services" className="py-2 hover:bg-gray-800 transition">
            Services
          </a>
          <a href="#categories" className="py-2 hover:bg-gray-800 transition">
            Catégories
          </a>
          <a href="#contact" className="py-2 hover:bg-gray-800 transition">
            Contact
          </a>

          {/* Panier mobile */}
          <button
            className="py-2 hover:bg-gray-800 transition relative"
            onClick={() => navigate("/cart")}
          >
            Panier
            <span className="absolute -top-1 right-16 bg-yellow-600 text-white text-xs font-semibold px-1.5 rounded-full">
              2
            </span>
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
