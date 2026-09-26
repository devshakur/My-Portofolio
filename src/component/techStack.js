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
      "HTML5",
      "CSS3",
      "Responsive Design",
      "WCAG",
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
