import React from "react";

const testimonios = [
  {
    nombre: "Vaik",
    mensaje:
      "Desde que entreno con Bahía, me siento más fuerte y con más energía todos los días.",
  },
  {
    nombre: "Santi",
    mensaje: "Las clases son divertidas y personalizadas. ¡Bahía es lo más!",
  },
  {
    nombre: "Cami",
    mensaje:
      "Me encanta la onda del grupo, me motiva a seguir moviéndome cada semana.",
  },
];

const Testimonios = () => {
  return (
    <section className="bg-orange-50 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-brown-700">Testimonios</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonios.map((testimonio, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-orange-100"
            >
              <p className="text-gray-700 italic mb-4">
                "{testimonio.mensaje}"
              </p>
              <p className="font-semibold text-brown-600">
                — {testimonio.nombre}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
