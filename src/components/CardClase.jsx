export default function CardClase({ clase }) {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}
    >
      <h3>{clase.titulo}</h3>
      <p>{clase.descripcion}</p>
      <p>
        <strong>Precio:</strong> ${clase.precio}
      </p>
    </div>
  );
}
