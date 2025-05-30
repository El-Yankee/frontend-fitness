import { useParams } from "react-router-dom";

export default function ClaseDetalle() {
  const { id } = useParams();

  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Detalle de la Clase</h2>
      <p className="mb-2 text-gray-700">
        ID de la clase: <strong>{id}</strong>
      </p>
      <p>
        Acá podrías mostrar información dinámica de la clase seleccionada. Por
        ejemplo: descripción, duración, nivel, instructora, etc.
      </p>
    </div>
  );
}
