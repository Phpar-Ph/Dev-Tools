import React from "react";
import { devTools } from "../data/SlideData";

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
              <span className="text-lg font-semibold animate-shine">
                {tool}
              </span>
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
