import React from "react";
import { FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-100 text-brown-800 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h4 className="font-bold mb-2">Teléfono</h4>
          <div className="flex justify-center md:justify-start items-center gap-2">
            <FaPhoneAlt />
            <span>+54 9 2352 48 51 56</span>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-2">Instagram</h4>
          <div className="flex justify-center md:justify-start items-center gap-2">
            <FaInstagram />
            <a
              href="https://instagram.com/pilatesonlinearg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @pilatesonlinearg
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-2">Email</h4>
          <div className="flex justify-center md:justify-start items-center gap-2">
            <FaEnvelope />
            <span>hola@pilatesonlinearg.com</span>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-8 text-brown-600">
        © {new Date().getFullYear()} Bahía Entrena. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
