import React from "react";
import Categories from "../components/Categories.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
