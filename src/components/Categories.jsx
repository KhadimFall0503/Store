import React, { useState, useEffect } from "react";
import axios from "axios";
import { Eye, ShoppingCart, Star, X } from "lucide-react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [produits, setProduits] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loadingProduits, setLoadingProduits] = useState(false);

  // Modal
  const [selectedProduit, setSelectedProduit] = useState(null);
  const [loadingProduitDetail, setLoadingProduitDetail] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/categories"
        );
        const categoriesData = response.data;
        setCategories(categoriesData);

        if (categoriesData.length > 0) {
          handleCategoryClick(categoriesData[0]);
        }
      } catch (err) {
        console.error("Erreur lors de la récupération des catégories :", err);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    setLoadingProduits(true);
    try {
      const response = await axios.get(
        `http://localhost:8000/api/produits?categorie=${category.id}`
      );
      setProduits(response.data);
    } catch (err) {
      console.error("Erreur lors de la récupération des produits :", err);
      setProduits([]);
    } finally {
      setLoadingProduits(false);
    }
  };

  const handleAddToCart = (produit) => {
    console.log("Ajouter au panier :", produit);
  };

  const openProduitModal = async (produitId) => {
    setLoadingProduitDetail(true);
    try {
      const response = await axios.get(
        `http://localhost:8000/api/produits/${produitId}`
      );
      const produitData = response.data;

      // Produits suggérés
      const catId = produitData.categorie;
      const suggestedResponse = await axios.get(
        `http://localhost:8000/api/produits?categorie=${catId}`
      );
      produitData.suggested = suggestedResponse.data.filter(
        (p) => p.id !== produitData.id
      );

      setSelectedProduit(produitData);
    } catch (err) {
      console.error("Erreur lors de la récupération du produit :", err);
    } finally {
      setLoadingProduitDetail(false);
    }
  };

  const closeProduitModal = () => {
    setSelectedProduit(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen" id="categories">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 mt-5">
        Catégories de Produits
      </h2>

      {/* Catégories */}
      <div className="flex gap-4 overflow-x-auto mb-6 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory?.id === category.id
                ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white border-transparent"
                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-200"
            } transition`}
          >
            {category.nom_categorie}
          </button>
        ))}
      </div>

      {/* Produits */}
      {loadingProduits ? (
        <p className="text-center">Chargement des produits...</p>
      ) : produits.length === 0 ? (
        <p className="text-center">Aucun produit disponible.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {produits.map((produit) => (
            <div
              key={produit.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-md transition flex flex-col"
            >
              {produit.image && (
                <img
                  src={produit.image}
                  alt={produit.nom}
                  className="w-full h-48 object-cover rounded-md mb-3"
                />
              )}

              <div className="mb-2 text-center">
                <h4 className="font-semibold text-lg mb-1">{produit.nom}</h4>
              </div>

              <p className="text-gray-600 mb-3 text-center">
                {produit.description}
              </p>

              <p className="text-yellow-600 font-bold text-center mb-3">
                {produit.prix} fcf
              </p>

              <div className="flex justify-center items-center gap-3 mt-auto">
                <button
                  onClick={() => openProduitModal(produit.id)}
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                >
                  <Eye size={20} />
                </button>

                <button
                  onClick={() => handleAddToCart(produit)}
                  className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-400 transition"
                >
                  <ShoppingCart size={16} className="mr-2" />
                  Ajouter
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedProduit && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 rounded-2xl overflow-hidden shadow-lg relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeProduitModal}
              className="absolute top-4 right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            >
              <X size={20} />
            </button>

            {loadingProduitDetail ? (
              <p className="text-center p-6">Chargement du produit...</p>
            ) : (
              <div className="p-6">
                {/* Produit principal */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {selectedProduit.image && (
                    <img
                      src={selectedProduit.image}
                      alt={selectedProduit.nom}
                      className="w-full h-96 object-cover rounded-xl"
                    />
                  )}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h2 className="text-4xl font-bold mb-4">
                        {selectedProduit.nom}
                      </h2>
                      <div className="flex gap-1 mb-4">
                        {[...Array(selectedProduit.note || 5)].map((_, i) => (
                          <Star key={i} className="text-yellow-500 w-5 h-5" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4">
                        {selectedProduit.description}
                      </p>
                      <p className="text-2xl font-bold text-yellow-600 mb-6">
                        {selectedProduit.prix} fcf
                      </p>
                    </div>
                    <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-3 rounded-xl hover:bg-yellow-700 transition">
                      <ShoppingCart size={20} /> Valider la commande
                    </button>
                  </div>
                </div>

                {/* Produits suggérés */}
                {selectedProduit.suggested?.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Vous pourriez aimer
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Découvrez d'autres produits de cette catégorie qui
                      pourraient parfaitement compléter votre achat. Que vous
                      cherchiez à enrichir votre style, à trouver des
                      accessoires assortis ou à explorer des nouveautés, notre
                      sélection a tout ce qu'il vous faut. Parcourez nos
                      articles soigneusement choisis, trouvez l'inspiration pour
                      vos tenues et laissez-vous séduire par des pièces uniques
                      et tendance qui reflètent votre personnalité.
                    </p>
                    <div className="flex overflow-x-auto gap-4 py-2">
                      {selectedProduit.suggested.map((p) => (
                        <div
                          key={p.id}
                          className="min-w-[200px] bg-white p-4 rounded-xl shadow hover:shadow-md transition cursor-pointer flex-shrink-0"
                          onClick={() => openProduitModal(p.id)}
                        >
                          {p.image && (
                            <img
                              src={p.image}
                              alt={p.nom}
                              className="w-full h-40 object-cover rounded-md mb-2"
                            />
                          )}
                          <h4 className="font-semibold text-lg">{p.nom}</h4>
                          <p className="text-yellow-600 font-bold">
                            {p.prix} fcf
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
