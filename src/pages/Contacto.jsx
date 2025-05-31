import React from "react";
import { FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Layout from "../components/Layout";

function Contacto() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#FFF1E6] flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-16 flex flex-col gap-12">
          {/* Datos de contacto */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            <h2 className="text-5xl font-extrabold text-pink-600 mb-2">
              Contacto
            </h2>
            <hr className="border-[#F8E8E0] w-24 mb-6" />
            <div className="space-y-6">
              {/* Teléfono */}
              <div className="flex items-center gap-4">
                <span className="bg-[#F8E8E0] p-4 rounded-full">
                  <FaPhoneAlt className="text-2xl text-[#a67c52]" />
                </span>
                <div>
                  <p className="font-semibold text-[#a67c52]">Teléfono</p>
                  <a
                    href="tel:+5491134567890"
                    className="text-[#3d3029] hover:underline block"
                  >
                    +54 9 11 3456 7890
                  </a>
                </div>
              </div>
              {/* Instagram */}
              <div className="flex items-center gap-4">
                <span className="bg-[#F8E8E0] p-4 rounded-full">
                  <FaInstagram className="text-2xl text-[#a67c52]" />
                </span>
                <div>
                  <p className="font-semibold text-[#a67c52]">Instagram</p>
                  <a
                    href="https://www.instagram.com/bahia.entrenamientos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3d3029] hover:underline block"
                  >
                    @bahia.entrenamientos
                  </a>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center gap-4">
                <span className="bg-[#F8E8E0] p-4 rounded-full">
                  <FaEnvelope className="text-2xl text-[#a67c52]" />
                </span>
                <div>
                  <p className="font-semibold text-[#a67c52]">Email</p>
                  <a
                    href="mailto:bahia.entrenamientos@gmail.com"
                    className="text-[#3d3029] hover:underline block"
                  >
                    bahia.entrenamientos@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contacto;
