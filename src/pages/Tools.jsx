import React from "react";
import ToolsList from "../data/ToolsList";
import { Link } from "react-router";

ToolsList.forEach((folder) => {
  folder.file.sort((a, b) => a.name.localeCompare(b.name));
});

function Tools() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-bgColor to-gray-900">
      <div className="container mx-auto px-4  pt-20 py-12 text-amber-50">
        <h1 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-amber-50 to-blue-400">
          Development Tools
        </h1>

        <div className="space-y-20">
          {ToolsList.map((folder) => (
            <div key={folder.folderName} className="group/section">
              <h2 className="text-3xl font-bold mb-8 pl-2 pb-2 border-b border-blue-500/30 flex items-center">
                <span className="bg-gradient-to-r from-amber-50 to-blue-400 bg-clip-text text-transparent">
                  {folder.folderName}
                </span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {folder.file.map((tool) => (
                  <div
                    key={tool.name}
                    className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.3)] border border-gray-700/30 hover:border-blue-500/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <Link
                      to={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 block"
                    >
                      <div className="flex items-center">
                        <div className="p-2.5 rounded-lg bg-gray-800/50 group-hover:bg-blue-900/50 duration-300 group-hover:scale-110 transition-transform">
                          <img
                            src={tool.icon}
                            className="h-5 w-5"
                            alt={tool.name}
                          />
                        </div>
                        <h3 className="text-lg font-medium ml-3 text-amber-50 group-hover:text-blue-400 transition-colors">
                          {tool.name}
                        </h3>
                      </div>
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
