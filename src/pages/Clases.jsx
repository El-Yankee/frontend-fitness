import React from "react";
import { Link } from "react-router-dom";

const clases = [
  {
    id: "funcional",
    titulo: "Funcional",
    descripcion:
      "Entrenamientos dinámicos para mejorar fuerza, coordinación y resistencia.",
    color: "bg-pink-100",
  },
  {
    id: "cardio",
    titulo: "Cardio",
    descripcion:
      "Movete, sudá y sentite viva. Mejorá tu capacidad aeróbica con clases activas.",
    color: "bg-yellow-100",
  },
  {
    id: "yoga",
    titulo: "Yoga",
    descripcion:
      "Conectá con tu cuerpo y tu respiración. Clases para fortalecer y relajar.",
    color: "bg-blue-100",
  },
  {
    id: "trekking",
    titulo: "Trekking",
    descripcion:
      "Salidas al aire libre para reconectar con la naturaleza y moverse en grupo.",
    color: "bg-green-100",
  },
  {
    id: "personalizadas",
    titulo: "Personalizadas",
    descripcion:
      "Planes de entrenamiento hechos a tu medida. Ideal para objetivos específicos.",
    color: "bg-purple-100",
  },
];

export default function Clases() {
  return (
    <main className="max-w-6xl min-h-screen mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-12">
        Clases disponibles
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {clases.map((clase) => (
          <Link to={`/clases/${clase.id}`} key={clase.id}>
            <div
              className={`rounded-xl shadow-md hover:shadow-lg transition p-6 ${clase.color} hover:scale-[1.02]`}
            >
              <h3 className="text-xl font-semibold mb-2">{clase.titulo}</h3>
              <p className="text-gray-700">{clase.descripcion}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
