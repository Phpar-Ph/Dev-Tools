import { RiTailwindCssFill } from "react-icons/ri";
import { FcFolder } from "react-icons/fc";
import { FaReact } from "react-icons/fa";

const ToolsList = [
  {
    folderName: "Web Development",
    file: [
      {
        name: "React Docs ",
        link: "https://react.dev/learn",
        icon: <FaReact style={{ color: "blue" }} />,
      },
      {
        name: "React Slick",
        link: "https://react-slick.neostack.com/docs/get-started",
        icon: <FaReact />,
      },
      {
        name: "Tailwind Docs",
        link: "https://tailwindcss.com/",
        icon: <RiTailwindCssFill />,
      },
    ],
  },
  {
    folderName: "Creative",
    file: [
      {
        name: "Unsplash",
        link: "https://unsplash.com/",
        icon: <FcFolder />,
      },
      {
        name: "Pexels",
        link: "https://www.pexels.com/",
        icon: <FcFolder />,
      },
      {
        name: "Canva",
        link: "https://www.canva.com/",
        icon: <FcFolder />,
      },
    ],
  },
];

export default ToolsList;
