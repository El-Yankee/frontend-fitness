import { useParams } from "react-router-dom";

export default function ClaseDetalle() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalle de la clase {id}</h1>
      <p>
        Aquí podrías cargar más información usando un backend o un archivo
        local.
      </p>
    </div>
  );
}
