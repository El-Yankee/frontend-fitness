import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

function useIsMobile() {
  return window.innerWidth < 768;
}

export default function Sobre() {
  const isMobile = useIsMobile();

  return (
    <Layout>
      <section className="py-16 px-4 max-w-4xl mx-auto min-h-screen flex flex-col md:flex-row items-center gap-10">
        {/* Imagen de perfil */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: isMobile ? 0 : -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/assets/funcional/funcional1.jpg"
            alt="Bahía entrenando"
            className="w-64 h-64 object-cover rounded-full border-8 border-[#ec4899] shadow-lg"
          />
        </motion.div>
        {/* Texto descriptivo */}
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-extrabold text-pink-600 mb-4">
            Sobre mí
          </h2>
          <hr className="border-pink-200 w-24 mb-6" />
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            ¡Hola! Soy{" "}
            <span className="font-semibold text-pink-500">Bahía</span>,
            profesora de fitness y bienestar. Mi misión es ayudarte a sentirte
            fuerte, activa y feliz, acompañándote en cada paso de tu camino.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Cuento con años de experiencia guiando clases de{" "}
            <span className="text-pink-500 font-medium">
              funcional, yoga, pilates y entrenamiento personalizado
            </span>
            . Me apasiona crear rutinas variadas, motivadoras y adaptadas a cada
            persona.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Creo que el movimiento es una herramienta poderosa para transformar
            tu vida. ¡Te invito a sumarte y descubrirlo juntas!
          </p>
        </motion.div>
      </section>
    </Layout>
  );
}
