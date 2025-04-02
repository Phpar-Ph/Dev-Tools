import React from "react";
const devTools = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Git",
  "VS Code",
  "Firebase",
  "AWS",
  "Vercel",
  "Figma",
  "JavaScript",
  "Python",
  "Django",
  "GraphQL",
  "Redux",
  "Vue.js",
  "Angular",
  "Svelte",
  "Express",
  "React Native",
  "Flutter",
  "Kotlin",
  "Swift",
];

const infiniteDevTools = [...devTools, ...devTools];
function Footer() {
  return (
    <div className="w-screen overflow-hidden b py-12 bg-bgColor">
      <div className="relative flex">
        <div
          className="flex space-x-8 animate-scroll"
          style={{
            animation: "scroll 60s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          {infiniteDevTools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-8 py-4 w- bg-white dark:bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <span className="text-lg font-semibold animate-shine">
                {tool}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
