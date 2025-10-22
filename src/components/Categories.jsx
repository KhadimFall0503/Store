import React, { useState, useEffect } from "react";
import axios from "axios";
import { Star, Eye } from "lucide-react"; // étoiles et icône vue
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [produits, setProduits] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loadingProduits, setLoadingProduits] = useState(false);

  // Récupérer catégories et produits de la première catégorie par défaut
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/categories"
        );
        const categoriesData = response.data;
        setCategories(categoriesData);

        if (categoriesData.length > 0) {
          const firstCategory = categoriesData[0];
          setSelectedCategory(firstCategory);
          setLoadingProduits(true);

          try {
            const produitsResponse = await axios.get(
              `http://localhost:8000/api/produits?categorie=${firstCategory.id}`
            );
            setProduits(produitsResponse.data);
          } catch (err) {
            console.error("Erreur lors de la récupération des produits :", err);
            setProduits([]);
          } finally {
            setLoadingProduits(false);
          }
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

  return (
    <div className="p-6 bg-gray-100 min-h-screen " id="categories">
      {/* Titre centré et plus grand */}
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 mt-5">
        Categories de Produits
      </h2>

      {/* Catégories en flex */}
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

              {/* Titre à gauche, étoiles à droite */}
              <div className="mb-2 text-center">
                <h4 className="font-semibold text-lg mb-1">{produit.nom}</h4>
                <div className="flex justify-center gap-1">
                  {[...Array(produit.note || 5)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 w-4 h-4" />
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-3 text-center">
                {produit.description}
              </p>

              {/* Prix à gauche, icône vue à droite */}
              <div className="flex justify-between items-center mt-auto">
                <p className="text-yellow-600 font-bold">{produit.prix} fcf</p>
                <Link to={`/produit/${produit.id}`}>
                  <Eye size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
