import React from "react";
import { FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contacto() {
  return (
    <div className="min-h-screen px-4 py-16 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-6xl font-bold text-center text-[#3d3029] mb-2">
          Contactame
        </h2>
        <hr className="border-[#3d3029] w-72 mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Teléfono */}
          <div className="bg-[#f3f2f1] rounded-2xl p-6 flex flex-col items-center shadow-sm">
            <div className="flex items-center w-full">
              <FaPhoneAlt className="text-5xl text-[#3d3029] mr-3" />
              <div>
                <p className="font-semibold text-[#3d3029]">Teléfono</p>
                <a
                  href="tel:+5491134567890"
                  className="text-[#3d3029] hover:underline mt-1 block"
                >
                  +54 9 11 3456 7890
                </a>
              </div>
            </div>
          </div>

          {/* Instagram */}
          <div className="bg-[#f3f2f1] rounded-2xl p-6 flex flex-col items-center shadow-sm">
            <div className="flex items-center w-full">
              <FaInstagram className="text-5xl text-[#3d3029] mr-3" />
              <div>
                <p className="font-semibold text-[#3d3029]">Instagram</p>
                <a
                  href="https://www.instagram.com/bahia.entrenamientos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3d3029] hover:underline mt-1 block"
                >
                  @bahia.entrenamientos
                </a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-[#f3f2f1] rounded-2xl p-6 flex flex-col items-center shadow-sm">
            <div className="flex items-center w-full">
              <FaEnvelope className="text-5xl text-[#3d3029] mr-3" />
              <div>
                <p className="font-semibold text-[#3d3029]">Email</p>
                <a
                  href="mailto:bahia.entrenamientos@gmail.com"
                  className="text-[#3d3029] hover:underline mt-1 block"
                >
                  bahia.entrenamientos@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
