import React from "react";
import { FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFF1E6] text-[#3d3029] py-10 border-t-2 border-[#F8E8E0]">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Teléfono */}
        <div>
          <h4 className="font-bold mb-2 text-pink-600">Teléfono</h4>
          <div className="flex justify-center md:justify-start items-center gap-2">
            <span className="bg-[#F8E8E0] p-2 rounded-full">
              <FaPhoneAlt className="text-[#a67c52]" />
            </span>
            <a
              href="tel:+5492352485156"
              className="hover:underline text-[#3d3029]"
            >
              +54 9 2352 48 51 56
            </a>
          </div>
        </div>
        {/* Instagram */}
        <div>
          <h4 className="font-bold mb-2 text-pink-600">Instagram</h4>
          <div className="flex justify-center md:justify-start items-center gap-2">
            <span className="bg-[#F8E8E0] p-2 rounded-full">
              <FaInstagram className="text-[#a67c52]" />
            </span>
            <a
              href="https://www.instagram.com/bahia.entrenamientos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-[#3d3029]"
            >
              @bahia.entrenamientos
            </a>
          </div>
        </div>
        {/* Email */}
        <div>
          <h4 className="font-bold mb-2 text-pink-600">Email</h4>
          <div className="flex justify-center md:justify-start items-center gap-2">
            <span className="bg-[#F8E8E0] p-2 rounded-full">
              <FaEnvelope className="text-[#a67c52]" />
            </span>
            <a
              href="mailto:bahia.entrenamientos@gmail.com"
              className="hover:underline text-[#3d3029]"
            >
              bahia.entrenamientos@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-8 text-[#a67c52]">
        © {new Date().getFullYear()} Bahía Entrena. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
