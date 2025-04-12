import React from "react";
import Footer from "../components/Footer";
import Card from "../components/HeroCard";
import CardTools from "../components/CardTools";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router";

function Hero() {
  return (
    <main className="bg-gradient-to-b from-bgColor to-gray-900 text-amber-50 min-h-screen w-full">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="pt-32 pb-20 ">
          <div className="flex justify-center items-center p-4">
            {/* Heading and Subheading */}
            <div className="flex flex-col font-inter max-w-2xl">
              <div className="mb-6">
                <h1 className="text-6xl md:text-7xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
                    HEY THERE!
                  </span>{" "}
                  <span className="inline-block animate-wave">👋</span>
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>

              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-amber-50">
                  Welcome to My Digital Toolbox
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  You've just landed on a curated collection of the essential
                  tools, resources, and software that fuel my web development
                  journey and daily workflow.
                </p>
              </div>

              <div className="mb-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Whether you're a fellow developer, a tech enthusiast, or just
                  someone looking for useful resources, you'll find a treasure
                  trove of valuable tools to enhance your projects.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <Link
                  to="/tools"
                  className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                >
                  <span>Explore Tools</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="flex gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Code Card */}
            <div className="w-1/2 flex justify-center items-center">
              <Card />
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-50 to-blue-400 bg-clip-text text-transparent">
              Featured Resources
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          </div>
          <CardTools />
        </div>
      </div>
    </main>
  );
}

export default Hero;
