import React from "react";
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

function About() {
  return (
    <div className="bg-bgColor w-full h-screen flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 transition-colors duration-300">
            <h2 className="text-3xl md:text-4xl font-bold animate-shine mb-8">
              Why This Digital Toolbox?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl">
                <Tool className="h-12 w-12 text-purple-500 mb-4 animate-float" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Resource Sharing
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I believe in the power of sharing knowledge and resources.
                  Every tool and resource here has played a crucial role in my
                  development journey.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl">
                <Lightbulb className="h-12 w-12 text-indigo-500 mb-4 animate-float" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Continuous Learning
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The tech world evolves rapidly. This toolbox represents my
                  commitment to continuous learning and adaptation to new
                  technologies.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl">
                <Share2 className="h-12 w-12 text-purple-500 mb-4 animate-float" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Community Building
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  By sharing these resources, I aim to contribute to the
                  developer community and help others on their coding journey.
                </p>
              </div>
            </div>
            <div className="mt-12 text-gray-600 dark:text-gray-300">
              <p className="mb-4">
                This digital toolbox is more than just a collection of
                links—it's a reflection of my journey in web development. Each
                resource has been carefully selected based on personal
                experience and practical application in real-world projects.
              </p>
              <p>
                Whether you're a beginner looking for learning resources or an
                experienced developer seeking to optimize your workflow, I hope
                you'll find something valuable here that enhances your
                development journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
