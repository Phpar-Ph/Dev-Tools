import React, { useState, useEffect } from "react";
import { Link } from "react-router";
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

function Header() {
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

  return (
    <header className="flex items-center justify-between text-lg h-20 w-full bg-bgHeader px-20 text-amber-50 fixed top-0 z-50 shadow-lg font-inter font-medium">
      {/* LOGO */}
      <Link to="/">
        {" "}
        <div className="relative group animate-float">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
          <div className="relative flex items-center px-2 py-1 bg-white dark:bg-bgLogo rounded-lg leading-none">
            <span className="ml-2 text-xl font-bold animate-shine">
              {"<devTools/>"}
            </span>
          </div>
        </div>
      </Link>
      <ul className="flex gap-16 justify-center items-center ">
        <Link to="/">HOME</Link>
        <Link to="/tools"> TOOLS</Link>
        <Link to="/about"> ABOUT</Link>
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
      </ul>
    </header>
  );
}

export default Header;
