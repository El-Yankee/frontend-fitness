import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import {
  FaDumbbell,
  FaHeartbeat,
  FaHiking,
  FaUserFriends,
  FaSpa,
} from "react-icons/fa";
import { motion } from "framer-motion";

const clases = [
  {
    id: "funcional",
    titulo: "Funcional",
    descripcion:
      "Entrenamientos dinámicos para mejorar fuerza, coordinación y resistencia.",
    color: "bg-pink-100",
    icono: <FaDumbbell className="text-pink-400" />,
    link: "/clases/funcional",
  },
  {
    id: "cardio",
    titulo: "Cardio",
    descripcion:
      "Movete, sudá y sentite viva. Mejorá tu capacidad aeróbica con clases activas.",
    color: "bg-yellow-100",
    icono: <FaHeartbeat className="text-yellow-400" />,
    link: "/clases/cardio",
  },
  {
    id: "yoga",
    titulo: "Yoga",
    descripcion:
      "Conectá con tu cuerpo y tu respiración. Clases para fortalecer y relajar.",
    color: "bg-blue-100",
    icono: <FaSpa className="text-blue-400" />,
    link: "/clases/yoga",
  },
  {
    id: "trekking",
    titulo: "Trekking",
    descripcion:
      "Salidas al aire libre para reconectar con la naturaleza y moverse en grupo.",
    color: "bg-green-100",
    icono: <FaHiking className="text-green-400" />,
    link: "/clases/trekking",
  },
  {
    id: "personalizadas",
    titulo: "Personalizadas",
    descripcion:
      "Planes de entrenamiento hechos a tu medida. Ideal para objetivos específicos.",
    color: "bg-purple-100",
    icono: <FaUserFriends className="text-purple-400" />,
    link: "/clases/personalizadas",
  },
];

export default function Clases() {
  return (
    <Layout>
      <main className="max-w-6xl min-h-screen mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-12">
          Clases disponibles
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {clases.map((clase, idx) => (
            <Link to={clase.link} key={clase.id}>
              <motion.div
                className={`rounded-xl shadow-md hover:shadow-2xl transition p-6 ${clase.color} hover:scale-105 border-2 border-transparent hover:border-pink-500 hover:-translate-y-1 cursor-pointer duration-200 flex flex-col items-start`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="text-4xl mb-2">{clase.icono}</div>
                <h3 className="text-xl font-bold mb-2 text-pink-600">
                  {clase.titulo}
                </h3>
                <p className="text-gray-700 mb-2">{clase.descripcion}</p>
                <span className="mt-auto text-pink-500 font-semibold hover:underline">
                  Ver más →
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
