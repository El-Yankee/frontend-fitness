import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          My Fitness App
        </Link>

        {/* Navegación */}
        <nav className="space-x-4">
          <NavLink
            to="/clases"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Clases
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Sobre
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
