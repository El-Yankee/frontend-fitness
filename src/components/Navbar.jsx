import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/">Inicio</Link> | <Link to="/clases">Clases</Link> |{" "}
      <Link to="/sobre">Sobre mí</Link> | <Link to="/contacto">Contacto</Link>
    </nav>
  );
}
