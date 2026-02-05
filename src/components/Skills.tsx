"use client";

import { FC } from "react";
import Image from "next/image";
import { generateIconUrl } from "../lib/utils";
import { DESIGN_SKILLS, DEV_SKILLS, METHOD_SKILLS } from "../data/skills";

const Skills: FC = () => {
  return (
    <div className="lg:min-h-[70vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]">
      <h1
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-0.6"
        className="text-center text-3xl lg:text-4xl"
      >
        Herramientas & Skills
      </h1>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="0.6"
        className="description text-lg text-center my-[30px] text-gray-400"
      >
        Tecnologías y herramientas que uso para crear experiencias digitales
      </p>

      {/* Design Skills */}
      <div className="w-full max-w-[900px] mb-10">
        <h3 className="text-xl text-blue-400 mb-4 text-center">Diseño UX/UI</h3>
        <div className="grid justify-center grid-cols-3 md:grid-cols-5 gap-y-[10px] md:gap-y-[20px]">
          {DESIGN_SKILLS.map((skill) => (
            <div
              key={skill.title}
              className="item flex flex-col items-center justify-around group"
            >
              <Image
                className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
                src={generateIconUrl(skill.image)}
                alt={`${skill.title} skill icon`}
                width={60}
                height={60}
              />
              <p className="text-center text-sm mt-1">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dev Skills */}
      <div className="w-full max-w-[900px] mb-10">
        <h3 className="text-xl text-blue-400 mb-4 text-center">Desarrollo & Herramientas</h3>
        <div className="grid justify-center grid-cols-4 md:grid-cols-7 gap-y-[10px] md:gap-y-[20px]">
          {DEV_SKILLS.map((skill) => (
            <div
              key={skill.title}
              className="item flex flex-col items-center justify-around group"
            >
              <Image
                className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
                src={generateIconUrl(skill.image)}
                alt={`${skill.title} skill icon`}
                width={60}
                height={60}
              />
              <p className="text-center text-sm mt-1">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology Skills */}
      <div className="w-full max-w-[900px]">
        <h3 className="text-xl text-blue-400 mb-4 text-center">Metodologías</h3>
        <div className="grid justify-center grid-cols-2 md:grid-cols-3 gap-3">
          {METHOD_SKILLS.map((skill) => (
            <div
              key={skill.title}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-500/5 border border-blue-500/10 hover:border-blue-500/30 transition duration-300"
            >
              <span className="text-2xl">{skill.emoji}</span>
              <span className="text-sm text-gray-300">{skill.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
