import React from "react";
import { motion } from "framer-motion";
import Testimonios from "../components/Testimonios";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Layout>
      <div className="font-sans text-gray-700 bg-[#FFF1E6]">
        {/* Hero principal */}
        <section className="min-h-[50vh] flex items-center justify-center text-center bg-gradient-to-b from-[#A0E7E5] to-[#FFB5E8] p-8 relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#F8E8E0] rounded-full opacity-60 blur-2xl -z-10" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#A0E7E5] rounded-full opacity-40 blur-2xl -z-10" />
          <div>
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Sentite fuerte, activa y feliz
            </motion.h1>
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Entrenamientos con Bahía. Para vos. A tu ritmo. Siempre
              acompañada.
            </motion.p>
          </div>
        </section>
        {/* Sección de clases */}
        <section id="clases" className="py-20 ">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12 text-pink-600">
              Clases para todos los gustos
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Gimnasio",
                  description: "Rutinas personalizadas para tu progreso.",
                  icon: "🏋️‍♀️",
                },
                {
                  title: "Trekking y Running",
                  description: "Aire libre, conexión y movimiento.",
                  icon: "🥾",
                },
                {
                  title: "Yoga & Pilates",
                  description: "Cuerpo fuerte, mente en paz.",
                  icon: "🧘‍♀️",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md transition flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-pink-600 mb-3">
                    {item.title}
                  </h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="mt-12 flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                to="/clases"
                className="inline-block bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-pink-700 transition"
              >
                Conocer más
              </Link>
            </motion.div>
          </div>
        </section>
        {/* Frase motivadora */}
        <section className="py-16 bg-[#A0E7E5] text-center text-gray-800 relative">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-32 h-32 bg-[#F8E8E0] rounded-full opacity-30 blur-2xl -z-10" />
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 italic">
            “No se trata solo de moverse, se trata de disfrutar el proceso”
          </h2>
          <p className="font-semibold text-pink-600">— Bahía</p>
        </section>
        <Testimonios />
      </div>
    </Layout>
  );
}
