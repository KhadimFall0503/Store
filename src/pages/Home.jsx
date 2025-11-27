import React from "react";
import Categories from "../components/Categories.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Services from "../components/Services.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Categories />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
