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
} from "lucide-react";
import { navData } from "../data/NavData";

function NavMenu() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  // const [isVisible, setIsVisible] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // useEffect(() => {
  //   const controlNavbar = () => {
  //     if (window.scrollY > lastScrollY && window.scrollY > 100) {
  //       setIsVisible(false);
  //     } else {
  //       setIsVisible(true);
  //     }
  //     setLastScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", controlNavbar);
  //   return () => window.removeEventListener("scroll", controlNavbar);
  // }, [lastScrollY]);

  const activeLink =
    "relative group  transition-colors animate-shine border-b-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 border-opacity-50 ";
  const inactiveLink = " hover:text-indigo-600 dark:hover:text-indigo-400";

  return (
    <header className=" flex items-center justify-center text-xl h-20 w-full bg-bgHeader text-primary fixed top-0 z-50 shadow-lg font-inter font-medium">
      <div className="container flex items-center justify-between">
        {/* LOGO */}
        <NavLink to="/">
          {" "}
          <div className="relative flex items-center px-2 py-1 b">
            <span className="ml-2 text-xl font-bold animate-shine">
              {"<devTools/>"}
            </span>
          </div>
        </NavLink>

        {/* MENU */}
        <div
          className="flex gap-12 justify-center items-center
      "
        >
          {navData.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }
            >
              {item.name}
            </NavLink>
          ))}
          {/* Dark mode ICON */}
          <div className="">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700  transform hover:rotate-45 transition-transform   "
            >
              {isDark ? (
                <Moon className="h-5 w-5 text-gray-700" />
              ) : (
                <Sun className="h-5 w-5 text-yellow-500" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavMenu;
