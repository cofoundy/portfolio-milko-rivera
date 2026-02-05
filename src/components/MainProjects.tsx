"use client";

import { BiLinkExternal } from "react-icons/bi";
import { FC } from "react";
import Image from "next/image";
import { generateIconUrl } from "../lib/utils";
import { PROJECTS } from "../data/projects";

const MainProjects: FC = () => {
  return (
    <>
      <h1 className="text-center text-4xl mb-10 md:mb-20">Proyectos Destacados</h1>
      {PROJECTS.map((project, index) => (
        <div
          key={project.id}
          className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 ${
            index % 2 === 1
              ? "flex-col lg:flex-row"
              : "flex-col lg:flex-row-reverse"
          }`}
        >
          <div data-scroll data-scroll-speed="2" className="lg:flex-1">
            <div className="border-blue-500/20 border-2 rounded-[20px] overflow-hidden">
              <div className="border-[#0a1628] border-[8px]">
                <Image
                  className="w-full h-auto rounded-[12px]"
                  src={project.image.url}
                  alt={`${project.title} project screenshot`}
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
          <div className="item-info lg:flex-1">
            <h1 className="text-3xl">{project.title}</h1>
            <p className="text-[20px] text-justify my-3 text-gray-300">
              {project.description}
            </p>

            <div className="flex gap-[5px]">
              {project.technologies.map((tech) => (
                <Image
                  key={tech}
                  className="w-[30px] h-[30px]"
                  src={generateIconUrl(tech, 30, 30)}
                  alt={`${tech} technology icon`}
                  width={30}
                  height={30}
                />
              ))}
            </div>

            <div className="flex mt-[25px] gap-[20px]">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-blue-600 hover:bg-blue-700"
                >
                  <BiLinkExternal size={25} />
                  <span>Ver más</span>
                </a>
              )}
              {project.behance && (
                <a
                  href={project.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1769FF] hover:bg-[#0d5ae0]"
                >
                  <BiLinkExternal size={25} />
                  <span>Ver en Behance</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainProjects;
