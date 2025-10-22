import React, { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/produits/?search=${value}`
      );
      setResults(response.data);
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
      setResults([]);
    }
  };

  return (
    <div className="flex-1 px-6 flex justify-center relative">
      <input
        type="search"
        placeholder="Rechercher un produit..."
        value={query}
        onChange={handleSearch}
        className="w-full max-w-md border border-gray-300 bg-gray-50 text-gray-800 rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />

      {/* Résultats */}
      {query && results.length > 0 && (
        <div className="absolute top-12 bg-white rounded-lg shadow-lg w-full max-w-md z-10 max-h-96 overflow-y-auto">
          {results.map((prod) => (
            <div
              key={prod.id}
              className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer border-b"
              onClick={() => (window.location.href = `/produits/${prod.id}`)}
            >
              {prod.image && (
                <img
                  src={prod.image}
                  alt={prod.nom}
                  className="w-12 h-12 object-cover rounded"
                />
              )}
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">{prod.nom}</span>
                <span className="text-yellow-600 font-bold">{prod.prix} €</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {query && results.length === 0 && (
        <div className="absolute top-12 bg-white rounded-lg shadow-lg w-full max-w-md z-10 p-3 text-gray-500 text-center">
          Aucun résultat
        </div>
      )}
    </div>
  );
};

export default SearchBar;
