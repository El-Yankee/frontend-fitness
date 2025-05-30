import { Carousel } from "antd";
import React from "react";

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
  margin: "60px auto",
  background: "rgba(255, 255, 255, 0.7)",
  borderRadius: 32,
  border: "8px solid #F8E8E0",
  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
  padding: "32px 0",
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
          }}
        >
          Reseñas
        </h2>
        <Carousel
          arrows
          infinite
          autoplay
          dots
          draggable
          responsive={true}
          prevArrow={
            <button
              style={{
                position: "absolute",
                left: 10, // más cerca del card
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: 24,
                background: "none",
                border: "none",
                color: "#555",
                zIndex: 1,
                cursor: "pointer",
              }}
            >
              ‹
            </button>
          }
          nextArrow={
            <button
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: 24,
                background: "none",
                border: "none",
                color: "#555",
                zIndex: 1,
                cursor: "pointer",
              }}
            >
              ›
            </button>
          }
        >
          {testimonios.map((testimonio, idx) => (
            <div key={idx}>
              <div style={contentStyle}>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    marginBottom: 4,
                  }}
                >
                  {testimonio.nombre}
                </div>
                <div
                  style={{
                    fontSize: 18,
                    marginBottom: 12,
                    letterSpacing: 2,
                  }}
                >
                  {"★".repeat(testimonio.estrellas)}
                  {"☆".repeat(5 - testimonio.estrellas)}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 20,
                    lineHeight: 1.5,
                    borderTop: "1px solid #E6F0D8",
                    paddingTop: 16,
                    width: "100%",
                  }}
                >
                  {testimonio.texto}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
