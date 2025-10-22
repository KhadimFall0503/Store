import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Star, PlusCircle, Eye, ArrowLeft } from "lucide-react"; // étoiles et icône retour

const ProduitDetail = () => {
  const [produit, setProduit] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate(); // hook pour navigation

  useEffect(() => {
    const fetchProduit = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/produits/${id}`
        );
        setProduit(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération du produit :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduit();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Chargement du produit...</p>;
  }

  if (!produit) {
    return (
      <p className="text-center mt-10 text-red-500">Produit introuvable</p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen mt-16">
      {/* Bouton Retour */}
      <button
        onClick={() => navigate("/")} // retourne à l'accueil
        className="flex items-center gap-2 mb-4 text-yellow-600 hover:text-yellow-800 font-semibold"
      >
        <ArrowLeft size={20} /> Retour à l'accueil
      </button>

      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Image */}
        {produit.image && (
          <img
            src={produit.image}
            alt={produit.nom}
            className="w-full h-80 md:h-96 object-cover"
          />
        )}

        {/* Contenu */}
        <div className="p-6 flex flex-col md:flex-row md:gap-8">
          {/* Informations produit */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4">{produit.nom}</h2>

            {/* Étoiles si note existante */}
            <div className="flex gap-1 mb-4">
              {[...Array(produit.note || 5)].map((_, i) => (
                <Star key={i} className="text-yellow-500 w-5 h-5" />
              ))}
            </div>

            <p className="text-gray-600 mb-4">{produit.description}</p>
            <p className="text-2xl font-bold text-yellow-600">
              {produit.prix} fcf
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4 mt-6 md:mt-0 md:w-1/3">
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-3 rounded-xl hover:bg-yellow-700 transition">
              <PlusCircle size={20} /> Ajouter au panier
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-300 px-4 py-3 rounded-xl hover:bg-gray-100 transition">
              <Eye size={20} /> Voir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProduitDetail;
