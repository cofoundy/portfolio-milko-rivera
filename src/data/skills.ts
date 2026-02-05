export const DESIGN_SKILLS = [
  { image: "figma", title: "Figma" },
  { image: "sketch", title: "Sketch" },
  { image: "photoshop", title: "Photoshop" },
  { image: "illustrator", title: "Illustrator" },
  { image: "adobe-xd", title: "Adobe XD" },
];

export const DEV_SKILLS = [
  { image: "html", title: "HTML" },
  { image: "css", title: "CSS" },
  { image: "javascript", title: "JavaScript" },
  { image: "wordpress", title: "WordPress" },
  { image: "git", title: "Git" },
  { image: "docker", title: "Docker" },
  { image: "database", title: "Databases" },
];

export const METHOD_SKILLS = [
  { title: "Metodologías Ágiles", emoji: "🔄" },
  { title: "Design Systems", emoji: "🎨" },
  { title: "Atomic Design", emoji: "⚛️" },
  { title: "Motion Design", emoji: "🎬" },
  { title: "User Research", emoji: "🔍" },
  { title: "Análisis UX", emoji: "📊" },
];

// Combined for backward compat
export const SKILLS = [
  ...DESIGN_SKILLS,
  ...DEV_SKILLS,
];
