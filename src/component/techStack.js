export const SKILL_GROUPS = [
  {
    title: "Frontend",
    accent: "#61DAFB",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript (ES6+)",
      "Design System",
      "Performance Engineering",
      "Api $ State Management",
      "Accessibility (WCAG 2.1)",
    "Testing & Quality",
    "Scalable UI Systems",

    ],
  },
];

export const TECH_STACK = SKILL_GROUPS.flatMap((group) =>
  group.skills.map((name) => ({
    name,
    group: group.title,
    accent: group.accent,
  }))
);

export const TECHNOLOGIES = [
  { name: "React", description: "UI library for building user interfaces", accent: "#61DAFB" },
  { name: "Next.js", description: "The React framework for production", accent: "#FFFFFF" },
  { name: "TypeScript", description: "Typed JavaScript for safer code", accent: "#3178C6" },
  { name: "Angular", description: "Frontend framework for large applications", accent: "#DD0031" },
  { name: "Tailwind CSS", description: "Utility-first CSS framework", accent: "#38BDF8" },
  { name: "React Native", description: "Native apps built with React", accent: "#61DAFB" },
  { name: "Expo", description: "Toolchain for React Native apps", accent: "#FFFFFF" },
  { name: "Node.js", description: "JavaScript runtime for the server", accent: "#339933" },
  { name: "Express", description: "Backend framework for Node.js", accent: "#FFFFFF" },
  { name: "Git & GitHub", description: "Version control and collaboration", accent: "#F05032" },
  { name: "Figma", description: "Design to code collaboration", accent: "#F24E1E" },
];
