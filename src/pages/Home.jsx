import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="font-sans text-gray-700 bg-[#FFF1E6]">
      {/* Hero principal */}
      <section className="min-h-screen flex items-center justify-center text-center bg-gradient-to-b from-[#A0E7E5] to-[#FFB5E8] p-8">
        <div>
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6"
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
            Entrenamientos con Bahía. Para vos. A tu ritmo. Siempre acompañada.
          </motion.p>
          <motion.a
            href="#clases"
            className="inline-block bg-white text-pink-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-50 transition"
            whileHover={{ scale: 1.05 }}
          >
            Conocé las clases
          </motion.a>
        </div>
      </section>

      {/* Sección de clases */}
      <section id="clases" className="py-20 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Clases para todos los gustos
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Gimnasio",
                description: "Rutinas personalizadas para tu progreso.",
              },
              {
                title: "Trekking y Running",
                description: "Aire libre, conexión y movimiento.",
              },
              {
                title: "Yoga & Pilates",
                description: "Cuerpo fuerte, mente en paz.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold text-pink-600 mb-3">
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Frase motivadora */}
      <section className="py-16 bg-[#A0E7E5] text-center text-gray-800">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          “No se trata solo de moverse, se trata de disfrutar el proceso”
        </h2>
        <p>— Bahía</p>
      </section>
    </div>
  );
}
