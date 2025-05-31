import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const fotos = [
  "/assets/personalizadas/personalizadas1.jpg",
  "/assets/personalizadas/personalizadas2.jpg",
  "/assets/personalizadas/personalizadas3.jpg",
  "/assets/personalizadas/personalizadas4.jpg",
  "/assets/personalizadas/personalizadas5.jpg",
  // Agrega más rutas de imágenes si tienes
];

export default function Personalizadas() {
  return (
    <Layout>
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 py-16"
      >
        <Link
          to="/clases"
          className="inline-block mb-6 text-pink-500 hover:underline font-semibold"
        >
          ← Volver a clases
        </Link>
        <h2 className="text-3xl font-bold text-pink-600 mb-6">
          Personalizadas
        </h2>
        {/* Galería Coverflow */}
        <div className="max-w-2xl mx-auto my-12">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
            style={{ paddingBottom: 40 }}
          >
            {fotos.map((src, idx) => (
              <SwiperSlide key={idx} className="w-72">
                <div className="aspect-[9/16] w-full">
                  <img
                    src={src}
                    alt={`Personalizadas ${idx + 1}`}
                    className="rounded-xl shadow-lg object-cover w-full h-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p className="text-lg text-gray-700 mb-6">
          Planes adaptados 100% a tus objetivos y tu disponibilidad. Entrená a
          tu manera.
        </p>
        <ul className="mb-6">
          <li className="flex items-center gap-2 text-gray-700 mb-2">
            <span className="text-pink-500 text-lg">•</span> Rutinas a medida
          </li>
          <li className="flex items-center gap-2 text-gray-700 mb-2">
            <span className="text-pink-500 text-lg">•</span> Seguimiento
            personalizado
          </li>
          <li className="flex items-center gap-2 text-gray-700 mb-2">
            <span className="text-pink-500 text-lg">•</span> Resultados
            garantizados
          </li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-pink-600 font-bold mb-1">Nivel</div>
            <div>A tu ritmo</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-pink-600 font-bold mb-1">Modalidad</div>
            <div>Online o presencial</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-pink-600 font-bold mb-1">Horarios</div>
            <div>A coordinar</div>
          </div>
        </div>
        {/* Aquí puedes agregar videos, galería de fotos, testimonios, etc */}
        <a
          href="https://wa.me/5492352485156"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-pink-700 transition"
        >
          Consultar o reservar por WhatsApp
        </a>
      </motion.main>
    </Layout>
  );
}
