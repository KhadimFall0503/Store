import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import ProduitDetail from "./pages/ProduitDetail.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produit/:id" element={<ProduitDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
