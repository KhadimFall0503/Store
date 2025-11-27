import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Juliette",
    message: "Produits de très bonne qualité et livraison rapide !",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "Juan",
    message: "Service client au top, je recommande vivement.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "Jeanne",
    message: "J'adore les produits, très satisfait de mon achat !",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
  {
    id: 4,
    name: "Nicolas",
    message: "Très bons produits et expérience agréable !",
    avatar: "https://i.pravatar.cc/150?img=22",
  },
];

const Testimonials = ({ testimonials = testimonialsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="my-10 px-6 relative">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
        Témoignages de nos clients
      </h2>

      {/* Carrousel */}
      <div className="relative flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="w-full max-w-3xl overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="flex-none w-full flex flex-col items-center text-center p-6 bg-white rounded-xl shadow mx-2"
              >
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                />
                <p className="text-gray-700 mb-2 italic">"{test.message}"</p>
                <h4 className="font-semibold text-lg">{test.name}</h4>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Points indicateurs */}
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === currentIndex ? "bg-yellow-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
