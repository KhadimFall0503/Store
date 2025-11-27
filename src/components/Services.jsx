import React from "react";
import { Truck, Shield, CreditCard } from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Livraison Rapide",
    description: "Recevez vos commandes rapidement et en toute sécurité.",
    icon: <Truck size={36} className="text-yellow-500" />,
  },
  {
    id: 2,
    title: "Paiement Sécurisé",
    description: "Vos paiements sont protégés grâce à notre système fiable.",
    icon: <CreditCard size={36} className="text-yellow-500" />,
  },
  {
    id: 3,
    title: "Qualité Garantie",
    description: "Des produits sélectionnés avec soin pour votre satisfaction.",
    icon: <Shield size={36} className="text-yellow-500" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 font-outfit">
        Nos Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
