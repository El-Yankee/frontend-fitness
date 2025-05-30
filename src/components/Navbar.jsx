import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Clases", path: "/clases" },
    { name: "Sobre mí", path: "/sobre" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-3xl transition-transform group-hover:-rotate-12">
            ✨
          </span>
          <span className="text-2xl font-extrabold text-pink-500 tracking-tight">
            Bahía Entrena
          </span>
        </Link>
        <nav className="space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium px-2 py-1 rounded transition-colors duration-200 ${
                location.pathname === item.path
                  ? "text-pink-600 bg-pink-50 underline underline-offset-4"
                  : "text-gray-600 hover:text-pink-500"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
