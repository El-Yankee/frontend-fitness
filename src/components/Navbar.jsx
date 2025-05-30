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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-500">Bahía Entrena</h1>
        <nav className="space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium ${
                location.pathname === item.path
                  ? "text-pink-600 underline underline-offset-4"
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
