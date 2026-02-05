import "../styles/globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { LazyMotion, domAnimation } from "framer-motion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://cofoundy.github.io"),
  title: "Milko Rivera | Diseñador UX/UI & Desarrollador",
  description:
    "Portfolio de Milko Fernando Rivera Sandoval - Diseñador UX/UI con +10 años de experiencia. Consultor UX para BBVA y Telefónica. +30 proyectos web, tiendas virtuales y apps.",
  icons: {
    icon: "/portfolio-milko-rivera/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: "Milko Rivera | Diseñador UX/UI & Desarrollador",
    description:
      "Diseñador UX/UI con +10 años de experiencia creando experiencias digitales para BBVA, Telefónica y +30 clientes.",
    images: ["/portfolio-milko-rivera/avatar.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milko Rivera | Diseñador UX/UI & Desarrollador",
    description:
      "Diseñador UX/UI con +10 años de experiencia creando experiencias digitales para BBVA, Telefónica y +30 clientes.",
    images: ["/portfolio-milko-rivera/avatar.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
      </body>
    </html>
  );
}
