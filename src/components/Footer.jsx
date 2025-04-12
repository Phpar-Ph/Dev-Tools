import React from "react";
import { devTools } from "../data/SlideData";
import { Link } from "react-router";

const infiniteDevTools = [...devTools, ...devTools];
function Footer() {
  return (
    <div className="w-screen overflow-hidden b py-12 bg-bgColor">
      <div className="relative ">
        <div
          className="flex space-x-8 animate-scroll p-4"
          style={{
            animation: "scroll 20s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          {infiniteDevTools.map((tool, index) => (
            <div key={index} className="devTools-card">
              <Link to={tool.link} target={"_blank"}>
                <span className="text-lg font-semibold animate-shine flex items-center gap-2 w-28 justify-center">
                  {<img src={tool.icon} className="h-5 w-5" />}
                  {tool.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
        <div
          className="flex space-x-8 animate-scroll"
          style={{
            animation: "scroll-left 20s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          {infiniteDevTools.map((tool, index) => (
            <div key={index} className="devTools-card">
              <Link to={tool.link} target={"_blank"}>
                <span className="text-lg font-semibold animate-shine flex items-center gap-2 w-28 justify-center">
                  {<img src={tool.icon} className="h-5 w-5" />}
                  {tool.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
