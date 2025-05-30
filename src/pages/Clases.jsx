import CardClase from "../components/CardClase";

const clases = [
  {
    id: 1,
    titulo: "Entrenamiento Funcional",
    descripcion: "Ideal para todo el cuerpo",
    precio: 2500,
  },
  {
    id: 2,
    titulo: "Clases de Stretching",
    descripcion: "Mejorá tu flexibilidad",
    precio: 2000,
  },
];

export default function Clases() {
  return (
    <div>
      <h1>Clases disponibles</h1>
      {clases.map((clase) => (
        <CardClase key={clase.id} clase={clase} />
      ))}
    </div>
  );
}
