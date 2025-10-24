import React, { useState } from "react";
import { ShoppingCart, User, Store, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ Importer useNavigate

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // ✅ Hook de navigation

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-gray-900 shadow-md border-b border-gray-200 font-inter z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 text-2xl font-bold tracking-tight cursor-pointer"
          onClick={() => navigate("/")} // ✅ Utilisation de navigate
        >
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-2 rounded-full flex items-center justify-center">
            <Store size={28} className="text-white" />
          </div>
          <span className="text-gray-900 hidden sm:inline font-outfit">
            Store
          </span>
        </div>

        {/* Onglets centraux */}
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-yellow-600 transition-colors">
            Accueil
          </a>
          <a
            href="#categories"
            className="hover:text-yellow-600 transition-colors"
          >
            Catégories
          </a>
          <a href="#propos" className="hover:text-yellow-600 transition-colors">
            A propos
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-600 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Icônes à droite */}
        <div className="flex items-center gap-4">
          {/* Connexion */}
          <button
            onClick={() => navigate("/")}
            className="hidden md:flex p-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-full hover:bg-yellow-500 transition duration-200 shadow-sm"
            title="Connexion"
          >
            <User size={20} />
          </button>

          {/* Panier */}
          <button
            onClick={() => navigate("/")}
            className="relative hover:text-yellow-600 transition duration-200"
            title="Panier"
          >
            <ShoppingCart size={28} />
            <span className="absolute -top-1 -right-2 bg-yellow-600 text-white text-xs font-semibold px-1.5 rounded-full">
              2
            </span>
          </button>

          {/* Menu mobile */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav className="md:hidden bg-gray-50 text-center flex flex-col gap-2 py-2 border-t border-gray-200">
          <button
            className="py-2 hover:bg-gray-100 flex justify-center"
            onClick={() => navigate("/")}
          >
            Connexion <User size={18} className="ml-1" />
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
