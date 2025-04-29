import React from "react";
import {
  RocketIcon,
  HardDriveIcon,
  GlobeIcon,
  ImageIcon,
  LinkIcon,
  BookIcon,
} from "lucide-react";

const ResourceCard = ({ icon, title, description, items }) => {
  return (
    <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl hover:shadow-xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg glass-card animated-gradient-card">
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold ml-3">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
        {description}
      </p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex  items-center group/item hover:bg-gray-50 dark:hover:bg-gray-700/50 p-2 rounded-lg transition-colors duration-200"
          >
            <span className="text-blue-600 dark:text-blue-400 mr-2  transition-transform group-hover/item:rotate-90 ">
              →
            </span>
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const resources = [
  {
    icon: <RocketIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Web Development Tools",
    description: "Essential tools that power my development workflow.",
    items: [
      "VS Code with custom extensions",
      "GitHub Copilot for AI assistance",
      "Chrome DevTools for debugging",
      "Figma for design mockups",
    ],
  },
  {
    icon: (
      <HardDriveIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
    ),
    title: "Software Collection",
    description: "Free and premium software I use regularly.",
    items: [
      "Adobe Creative Suite for design work",
      "Notion for project management",
      "OBS Studio for screen recording",
      "Slack for team communication",
    ],
  },
  {
    icon: (
      <GlobeIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
    ),
    title: "Useful Websites",
    description: "Websites that boost productivity and creativity.",
    items: [
      "MDN Web Docs for reference",
      "CSS-Tricks for web design tips",
      "Stack Overflow for problem-solving",
      "Smashing Magazine for industry insights",
    ],
  },
  // {
  //   icon: (
  //     <ImageIcon className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
  //   ),
  //   title: "Stock Media Resources",
  //   description: "Free high-quality images and videos for projects.",
  //   items: [
  //     "Unsplash for beautiful photographs",
  //     "Pexels for free stock photos & videos",
  //     "Pixabay for illustrations and vectors",
  //     "Mixkit for free video assets",
  //     "unDraw for open-source illustrations",
  //   ],
  // },
  // {
  //   icon: <LinkIcon className="h-6 w-6 text-red-600 dark:text-red-400" />,
  //   title: "Social & Networking",
  //   description: "Platforms I use to connect and stay updated.",
  //   items: [
  //     "GitHub for code sharing",
  //     "LinkedIn for professional networking",
  //     "Twitter for tech news and updates",
  //     "Dev.to for community articles",
  //     "Discord for developer communities",
  //   ],
  // },
  {
    icon: <BookIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    title: "Recommended Books",
    description: "Books that have shaped my development journey.",
    items: [
      "Eloquent JavaScript by Marijn Haverbeke",
      "Clean Code by Robert C. Martin",
      "You Don't Know JS by Kyle Simpson",
      "Design Patterns by Erich Gamma et al.",
    ],
  },
];

function CardTools() {
  return (
    <div className="">
      <div className=" mb-10 mt-10 ">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              icon={resource.icon}
              title={resource.title}
              description={resource.description}
              items={resource.items}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default CardTools;
