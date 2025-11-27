import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Star, PlusCircle, ArrowLeft } from "lucide-react";

const ProduitDetail = () => {
  const [produit, setProduit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [suggested, setSuggested] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduit = async () => {
      try {
        // Produit principal
        const response = await axios.get(
          `http://localhost:8000/api/produits/${id}`
        );
        setProduit(response.data);

        // Produits suggérés de la même catégorie
        const catId = response.data.categorie; // Assure-toi que l'API renvoie l'id de la catégorie
        const suggestedResponse = await axios.get(
          `http://localhost:8000/api/produits?categorie=${catId}`
        );
        // Filtrer le produit actuel
        setSuggested(
          suggestedResponse.data.filter((p) => p.id !== response.data.id)
        );
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
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen mt-16">
      {/* Bouton Retour */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 mb-6 text-yellow-600 hover:text-yellow-800 font-semibold"
      >
        <ArrowLeft size={20} /> Retour à l'accueil
      </button>

      {/* Grille 2 colonnes pour le produit */}
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 mb-10">
        {produit.image && (
          <img
            src={produit.image}
            alt={produit.nom}
            className="w-full h-96 object-cover"
          />
        )}

        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-4">{produit.nom}</h2>

            <div className="flex gap-1 mb-4">
              {[...Array(produit.note || 5)].map((_, i) => (
                <Star key={i} className="text-yellow-500 w-5 h-5" />
              ))}
            </div>

            <p className="text-gray-600 mb-4">{produit.description}</p>
            <p className="text-2xl font-bold text-yellow-600 mb-6">
              {produit.prix} fcf
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-3 rounded-xl hover:bg-yellow-700 transition">
              <PlusCircle size={20} /> Ajouter au panier
            </button>
          </div>
        </div>
      </div>

      {/* Produits suggérés */}
      {suggested.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold mb-2">Vous pourriez aimer</h3>
          <p className="text-gray-600 mb-4">
            Découvrez d'autres produits de cette catégorie qui pourraient
            parfaitement compléter votre achat. Que vous cherchiez à enrichir
            votre style, à trouver des accessoires assortis ou à explorer des
            nouveautés, notre sélection a tout ce qu'il vous faut. Parcourez nos
            articles soigneusement choisis, trouvez l'inspiration pour vos
            tenues et laissez-vous séduire par des pièces uniques et tendance
            qui reflètent votre personnalité.
          </p>
          <div className="flex overflow-x-auto gap-4 py-2">
            {suggested.map((p) => (
              <div
                key={p.id}
                className="min-w-[200px] bg-white p-4 rounded-xl shadow hover:shadow-md transition cursor-pointer flex-shrink-0"
                onClick={() => navigate(`/produit/${p.id}`)}
              >
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.nom}
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />
                )}
                <h4 className="font-semibold text-lg">{p.nom}</h4>
                <p className="text-yellow-600 font-bold">{p.prix} fcf</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProduitDetail;
