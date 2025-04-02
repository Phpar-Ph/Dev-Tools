import React from "react";
import { FcFolder } from "react-icons/fc";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router";
import { RiTailwindCssFill } from "react-icons/ri";

const tools = [
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

tools.forEach((folder) => {
  folder.file.sort((a, b) => a.name.localeCompare(b.name));
});

function Tools() {
  return (
    <div className="h-screen w-full bg-bgColor">
      <div className="container mx-auto p-20 text-amber-50">
        <div className="">
          {tools.map((folder) => (
            <div
              key={folder.folderName}
              className=" pl-2 pb-5 pt-20 text-4xl shadow-[0px_22px_16px_-17px_rgba(59,_130,_246,_0.5)]"
            >
              <h1>{folder.folderName}</h1>
              <div className="grid grid-cols-4 gap-4 p-10 text-center">
                {folder.file.map((sub) => (
                  <div key={sub.name} className=" pb-4">
                    <Link to={sub.link} target={"_blank"}>
                      <p className="inline-flex items-center gap-1 text-2xl">
                        {sub.icon}
                        {sub.name}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/*
          
          <div className="grid grid-cols-6 gap-4">
            {tools.map((obj) => (
              <Link to={obj.link} target={"_blank"}>
                {" "}
                <p className="inline-flex items-center gap-1">
                  {obj.icon} {obj.name}
                </p>
              </Link>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Tools;
