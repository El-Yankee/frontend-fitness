import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

const clases = {
  funcional: {
    titulo: "Funcional",
    descripcion:
      "Entrenamientos intensos y variados que combinan fuerza, cardio y coordinación.",
    imagen: "/assets/funcional.jpg",
  },
  cardio: {
    titulo: "Cardio",
    descripcion:
      "Clases dinámicas para activar tu energía, liberar tensiones y mejorar tu resistencia.",
    imagen: "/assets/cardio.jpg",
  },
  yoga: {
    titulo: "Yoga",
    descripcion:
      "Fluidez, respiración y conexión cuerpo-mente. Ideal para mejorar tu bienestar general.",
    imagen: "/assets/yoga.jpg",
  },
  trekking: {
    titulo: "Trekking",
    descripcion:
      "Explorá la naturaleza mientras entrenás en equipo y te recargás de energía natural.",
    imagen: "/assets/trekking.jpg",
  },
  personalizadas: {
    titulo: "Entrenamientos Personalizados",
    descripcion:
      "Planes adaptados 100% a tus objetivos y tu disponibilidad. Entrená a tu manera.",
    imagen: "/assets/personalizadas.jpg",
  },
};

export default function ClaseDetalle() {
  const { id } = useParams();
  const clase = clases[id];

  if (!clase) {
    return (
      <p className="text-center mt-16 text-red-500">Clase no encontrada</p>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-4 py-16"
    >
      <h2 className="text-3xl font-bold text-pink-600 mb-6">{clase.titulo}</h2>
      <img
        src={clase.imagen}
        alt={clase.titulo}
        className="rounded-xl shadow-md w-full aspect-auto object-cover mb-8"
      />
      <p className="text-lg text-gray-700">{clase.descripcion}</p>
    </motion.main>
  );
}
