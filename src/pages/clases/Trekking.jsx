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
  "/assets/trekking/trekking1.jpg",
  "/assets/trekking/trekking2.jpg",
  "/assets/trekking/trekking3.jpg",
  "/assets/trekking/trekking4.jpg",
  "/assets/trekking/trekking5.jpg",
  // Agrega más rutas de imágenes si tienes
];

export default function Trekking() {
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
        <h2 className="text-3xl font-bold text-pink-600 mb-6">Trekking</h2>
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
                    alt={`Trekking ${idx + 1}`}
                    className="rounded-xl shadow-lg object-cover w-full h-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p className="text-lg text-gray-700 mb-6">
          Explorá la naturaleza mientras entrenás en equipo y te recargás de
          energía natural.
        </p>
        <ul className="mb-6">
          <li className="flex items-center gap-2 text-gray-700 mb-2">
            <span className="text-pink-500 text-lg">•</span> Conexión con la
            naturaleza
          </li>
          <li className="flex items-center gap-2 text-gray-700 mb-2">
            <span className="text-pink-500 text-lg">•</span> Trabajo
            cardiovascular y de piernas
          </li>
          <li className="flex items-center gap-2 text-gray-700 mb-2">
            <span className="text-pink-500 text-lg">•</span> Ideal para
            socializar
          </li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-pink-600 font-bold mb-1">Nivel</div>
            <div>Todos los niveles</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-pink-600 font-bold mb-1">Modalidad</div>
            <div>Salidas grupales</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-pink-600 font-bold mb-1">Horarios</div>
            <div>Consultar fechas</div>
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
