import React from "react";
import Footer from "../components/Footer";
import Card from "../components/HeroCard";
import CardTools from "../components/CardTools";

function Hero() {
  return (
    <main className="bg-bgColor text-amber-50 h-full w-full  text-2xl ">
      <div className="pt-40 flex flex-col items-center">
        {/* HERO SECTION  */}
        <div className="flex pt-10 pb-20  gap-28">
          {/* Heading and Subheading */}
          <div className="px-20 flex flex-col font-inter">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6  ">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">
                  HEY THERE!{" "}
                </span>
                👋
              </h1>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-700 dark:text-gray-200 text-gradient">
                Welcome to My Digital Toolbox
              </h2>
            </div>
            <div>
              <h3 className=" max-w-4xl mx-auto leading-relaxed text-lg text-gray-600 dark:text-gray-400">
                You've just landed on a curated collection of the essential
                tools, resources, and software that fuel my web development
                journey and daily workflow. Whether you're a fellow developer, a
                tech enthusiast, or just someone looking for useful resources,
                you'll find a treasure trove of:{" "}
              </h3>
            </div>
          </div>
          <Card />
        </div>
        <div>
          <CardTools />
        </div>
        <div>{/* <Footer /> */}</div>
      </div>
    </main>
  );
}

export default Hero;
