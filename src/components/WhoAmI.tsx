"use client";

import { FC } from "react";
import Image from "next/image";
import { BASE_PATH } from "../lib/constants";

const Who: FC = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <Image
        data-scroll
        data-scroll-speed="2"
        className="w-[225px] h-[225px] rounded-full border-4 border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.2)]"
        src={`${BASE_PATH}/avatar.png`}
        alt="Milko Rivera - Diseñador UX/UI"
        width={225}
        height={225}
        priority
      />
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          ¿Quién soy?
        </h1>

        <p data-scroll className="text-lg text-gray-200" id="story">
          Soy Milko Rivera, Diseñador UX/UI y desarrollador con más de 10 años de experiencia
          transformando ideas en experiencias digitales que conectan usuarios con productos.
          Bachiller en Ingeniería en Informática y Sistemas por la UNAS, actualmente trabajo
          como Consultor UX para BBVA a través de Solera. Anteriormente diseñé productos
          para Telefónica del Perú y creé más de 30 sitios web, tiendas virtuales y
          aplicaciones móviles en Web-Out S.A.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
            🏦 BBVA
          </span>
          <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
            📱 Telefónica
          </span>
          <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
            🎨 +30 Proyectos
          </span>
          <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
            📍 Tingo María, Perú
          </span>
        </div>
      </div>
    </div>
  );
};

export default Who;
