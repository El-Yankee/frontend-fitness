import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonios = [
  {
    nombre: "Santi",
    estrellas: 5,
    texto:
      "La conocí a Bahi post pandemia, su dedicación, su método hizo que continuará con ella, sus clases son excelentes, está en los detalles y sobre todo siempre hay algo nuevo",
  },
  {
    nombre: "Cami",
    estrellas: 5,
    texto:
      "Las clases de Bahía son lo mejor del día. Me motivan y me hacen sentir fuerte y conectada. ¡Gracias por tanta energía!",
  },
  {
    nombre: "Cande",
    estrellas: 5,
    texto:
      "Super dinámicas y variadas las rutinas. ¡Siempre salgo renovada! Me encanta que haya opciones al aire libre también.",
  },
  {
    nombre: "Vaik",
    estrellas: 5,
    texto: "¡Altamente recomendable!",
  },
];

const containerStyle = {
  maxWidth: 900,
  margin: "auto",
  background: "rgba(255, 241, 230, 0.85)", // Fondo acorde al sitio
  borderRadius: 32,
  // border: "4px solid #F8E8E0", // Eliminado el reborde
  //boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
  padding: "32px 0",
  fontFamily: "sans-serif",
};

const contentStyle = {
  margin: 0,
  minHeight: "220px",
  background: "#fff",
  borderRadius: 16,
  border: "2px solid #E6F0D8",
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "32px 32px 24px 32px",
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
};

export default function Testimonios() {
  return (
    <div>
      <div style={containerStyle}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: 10,
            fontSize: 38,
            letterSpacing: 1,
            color: "#ec4899", // Rosa fuerte
            fontFamily: "inherit",
            fontWeight: 800,
          }}
        >
          Reseñas
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          style={{ paddingBottom: 40 }}
        >
          {testimonios.map((testimonio, idx) => (
            <SwiperSlide key={idx}>
              <div style={contentStyle}>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 4,
                    color: "#a67c52", // Marrón/dorado
                  }}
                >
                  {testimonio.nombre}
                </div>
                <div
                  style={{
                    fontSize: 18,
                    marginBottom: 12,
                    letterSpacing: 2,
                    color: "#FFD700", // Estrellas doradas
                  }}
                >
                  {"★".repeat(testimonio.estrellas)}
                  <span style={{ color: "#E6E6E6" }}>
                    {"☆".repeat(5 - testimonio.estrellas)}
                  </span>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 20,
                    lineHeight: 1.5,
                    borderTop: "1px solid #F8E8E0",
                    paddingTop: 16,
                    width: "100%",
                    color: "#3d3029", // Texto principal
                    fontFamily: "inherit",
                  }}
                >
                  {testimonio.texto}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
