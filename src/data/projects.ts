import { BASE_PATH } from "../lib/constants";

export const PROJECTS = [
  {
    id: "project-1",
    title: "UX Consultant — BBVA",
    description:
      "Consultoría UX para el equipo de BBVA a través de Solera. Diseño de interfaces para productos bancarios digitales, mejorando la experiencia del usuario en servicios financieros para millones de clientes en Perú.",
    demo: "https://www.bbva.pe",
    behance: "",
    technologies: ["figma", "sketch", "jira"],
    image: {
      url: `${BASE_PATH}/projects/bbva.svg`,
    },
  },
  {
    id: "project-2",
    title: "UX Designer — Telefónica del Perú",
    description:
      "Diseño UX para productos de Movistar en Telefónica del Perú. Mejora de interfaces de servicios móviles y portales de atención al cliente. Experiencia documentada en Behance.",
    demo: "",
    behance: "https://www.behance.net/gallery/185728267/Mi-experiencia-en-Movistar",
    technologies: ["figma", "sketch", "photoshop"],
    image: {
      url: `${BASE_PATH}/projects/telefonica.svg`,
    },
  },
  {
    id: "project-3",
    title: "Tienda Virtual Turismo",
    description:
      "Diseño UX/UI de e-commerce para el sector turismo. Interfaces intuitivas para reservas, paquetes turísticos y experiencias de viaje. Proyecto más destacado en Behance con 152+ views.",
    demo: "",
    behance: "https://www.behance.net/gallery/157651109/Tienda-Virtual-Turismo",
    technologies: ["figma", "photoshop", "illustrator"],
    image: {
      url: `${BASE_PATH}/projects/turismo.svg`,
    },
  },
  {
    id: "project-4",
    title: "UI Facturador Electrónico",
    description:
      "Diseño de interfaz para sistema de facturación electrónica. Software empresarial con enfoque en usabilidad y eficiencia operativa para negocios peruanos.",
    demo: "",
    behance: "https://www.behance.net/gallery/150687909/UI-Facturador-Electronico",
    technologies: ["figma", "adobe-xd", "illustrator"],
    image: {
      url: `${BASE_PATH}/projects/facturador.svg`,
    },
  },
];
