import React from "react";
import { Link } from "react-router";
import ToolsList from "../data/ToolsList";

ToolsList.forEach((folder) => {
  folder.file.sort((a, b) => a.name.localeCompare(b.name));
});

function Tools() {
  return (
    <div className="h-full w-full bg-bgColor">
      <div className="container mx-auto p-20 text-amber-50">
        <div className="">
          {ToolsList.map((folder) => (
            <div
              key={folder.folderName}
              className=" pl-2 pb-5 pt-10 text-4xl shadow-[0px_22px_16px_-17px_rgba(59,_130,_246,_0.5)] font-bold"
            >
              <h1>{folder.folderName}</h1>
              <div className="grid grid-cols-4 gap-4 p-10 text-left">
                {folder.file.map((sub) => (
                  <div key={sub.name} className=" ">
                    <Link to={sub.link} target={"_blank"}>
                      <p className="flex items-center text-2xl gap-2 font-medium text-gray-400 hover:text-amber-50 hover:scale-105 transition-transform duration-300 ease-in-out">
                        {sub.icon ? (
                          <img
                            src={sub.icon}
                            className="h-5 w-5"
                            alt={sub.name}
                          />
                        ) : (
                          sub.name
                        )}
                        {sub.name}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tools;
