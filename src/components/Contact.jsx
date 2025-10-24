import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/contacts/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message envoyé !");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        console.error(errorData);
        alert("Erreur lors de l'envoi du message");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur réseau, réessayez");
    }
  };

  return (
    <section
      className="bg-gray-100 text-gray-900 py-16 px-6 md:px-12"
      id="contact"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-3xl shadow-lg space-y-6"
        >
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
            Contactez-nous
          </h2>

          <div>
            <label className="block mb-2 font-semibold" htmlFor="name">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 font-bold py-3 rounded-xl hover:bg-yellow-600 transition-colors"
          >
            Envoyer
          </button>
        </form>

        {/* Informations de contact */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Adresse</h3>
            <p>Dakar, Pikine, Sénégal</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p>khadimfall0503@gmail.com</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Localisation</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.0000000000005!2d-17.425!3d14.692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f1b4a4f5d9%3A0x0!2sDakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2s!4v1690000000000!5m2!1sfr!2s"
              width="100%"
              height="200"
              className="rounded-xl"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
