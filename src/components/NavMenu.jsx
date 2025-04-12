import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import {
  Code2,
  Mail,
  Menu,
  X,
  Sun,
  Moon,
  PenTool as Tool,
  Lightbulb,
  Share2,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { navData } from "../data/NavData";

function NavMenu() {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeLink =
    "relative group transition-all duration-300 text-amber-50 font-semibold";
  const inactiveLink =
    "relative group transition-all duration-300 text-gray-400 hover:text-amber-50";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-bgHeader/90 backdrop-blur-md shadow-lg py-2"
          : "bg-bgHeader py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <NavLink to="/" className="group">
            <div className="flex items-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative px-3 py-1 bg-bgHeader rounded-lg">
                  <span className="text-xl font-bold bg-gradient-to-r from-amber-50 to-blue-400 bg-clip-text text-transparent">
                    {"<devTools/>"}
                  </span>
                </div>
              </div>
            </div>
          </NavLink>

          {/* MENU */}
          <div className="flex items-center gap-8">
            {navData.map((item, i) => (
              <NavLink
                key={i}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? activeLink : inactiveLink
                }
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}

            {/* Social Links */}
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-700">
              {/* Dark mode toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors group ml-2"
              >
                {isDark ? (
                  <Moon className="h-4 w-4 text-gray-400 group-hover:text-amber-50 transition-colors" />
                ) : (
                  <Sun className="h-4 w-4 text-gray-400 group-hover:text-amber-50 transition-colors" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavMenu;
