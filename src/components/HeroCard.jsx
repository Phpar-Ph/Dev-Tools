import React from "react";
import { Code, Sparkles } from "lucide-react";

function Card() {
  return (
    <div className="w-96 ">
      <div className="relative font-Fira">
        <div className="hero-gradient w-64 h-64 rounded-full filter blur-3xl opacity-20 absolute -top-10 -right-10 animate-pulse-slow"></div>
        <div className="glass-card p-6 animate-float">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-2 text-sm text-gray-500 dark:text-gray-400 font-mono">
              developer-toolbox.jsx
            </div>
            <Code className="ml-auto h-4 w-4 text-gray-500 dark:text-gray-400" />
          </div>
          <div className="font-mono text-sm space-y-2 text-gray-800 dark:text-gray-300">
            <div>
              <span className="text-developer-indigo dark:text-purple-400">
                const
              </span>{" "}
              <span className="text-developer-blue dark:text-blue-400">
                developerTools
              </span>{" "}
              = {`{`}
            </div>
            <div className="pl-4">
              <span className="text-gray-600 dark:text-gray-400">webDev:</span>{" "}
              <span className="text-green-600 dark:text-green-500">
                'Essential tools & utilities'
              </span>
              ,
            </div>
            <div className="pl-4">
              <span className="text-gray-600 dark:text-gray-400">
                software:
              </span>{" "}
              <span className="text-green-600 dark:text-green-500">
                'Free & premium options'
              </span>
              ,
            </div>
            <div className="pl-4">
              <span className="text-gray-600 dark:text-gray-400">
                resources:
              </span>{" "}
              <span className="text-green-600 dark:text-green-500">
                'Websites & learning materials'
              </span>
              ,
            </div>
            <div className="pl-4">
              <span className="text-gray-600 dark:text-gray-400">media:</span>{" "}
              <span className="text-green-600 dark:text-green-500">
                'Free stock images & videos'
              </span>
              ,
            </div>
            <div className="pl-4">
              <span className="text-gray-600 dark:text-gray-400">social:</span>{" "}
              <span className="text-green-600 dark:text-green-500">
                'Networking platforms'
              </span>
              ,
            </div>
            <div className="pl-4">
              <span className="text-gray-600 dark:text-gray-400">reading:</span>{" "}
              <span className="text-green-600 dark:text-green-500">
                'Books that inspire & educate'
              </span>
            </div>
            <div>{`}`};</div>
            <div className="mt-2">
              <span className="text-developer-indigo dark:text-purple-400">
                export default
              </span>{" "}
              <span className="text-developer-blue dark:text-blue-400">
                developerTools
              </span>
              ;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
