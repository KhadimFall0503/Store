import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/src/assets/shoping.jpg",
    title: "Nouveautés Tendance",
    text: "Profitez des meilleures offres sur vêtements et accessoires.",
  },
  {
    image: "/src/assets/shoping2.jpg",
    title: "Style et Confort",
    text: "Des tenues tendance pour toutes les occasions.",
  },
  {
    image: "/src/assets/shoping3.jpg",
    title: "Accessoires Exclusifs",
    text: "Complétez votre look avec nos accessoires uniques.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change toutes les 5 secondes
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-20 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80"></div>

          {/* Texte centré */}
          <div className="relative z-10 max-w-3xl text-center text-white mx-auto px-4 sm:px-6 md:px-20 space-y-4 font-outfit top-1/2 -translate-y-1/2">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold font-montserrat leading-snug tracking-tight whitespace-nowrap">
              {slide.title}
            </h1>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
              {slide.text}
            </p>
          </div>
        </div>
      ))}

      {/* Points / indicateurs */}
      <div className="absolute bottom-10 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide ? "bg-yellow-500 w-4 h-4" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
