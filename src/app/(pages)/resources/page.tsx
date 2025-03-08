import Navbar from "@/components/Nabar";
import React from "react";

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar activeLink="Resources" />

      <div className="flex max-w-7xl mx-auto px-4 py-8 pt-32">
        <div className="w-64 pr-8">
          <h2 className="font-semibold mb-4 text-white">Topics</h2>
          <nav className="flex flex-col space-y-2">
            {[
              "AI",
              "Blockchain",
              "Cloud Computing",
              "Data Science",
              "Web Development",
              "Mobile Development",
            ].map((topic) => (
              <a
                key={topic}
                href={`#${topic.toLowerCase().replace(" ", "-")}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {topic}
              </a>
            ))}
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Learning Resources
            </h2>
            <p className="text-gray-400 mb-6">
              Explore our comprehensive learning materials and documentation to
              master various programming concepts and technologies.
            </p>
          </div>

          {/* Concepts Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              "Basic Concepts",
              "Advanced Topics",
              "Projects",
              "Documentation",
              "Tutorials",
              "Examples",
            ].map((concept) => (
              <div
                key={concept}
                className="p-4 border border-gray-800 rounded-lg hover:border-white hover:bg-gray-900 transition-all cursor-pointer"
              >
                <h3 className="font-semibold text-white">{concept}</h3>
              </div>
            ))}
          </div>

          {/* Contributors Section */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Contributors
            </h3>
            <div className="flex space-x-4">
              {[1, 2, 3].map((contributor) => (
                <div key={contributor} className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gray-900 rounded-full border border-gray-800"></div>
                  <div className="text-sm text-gray-400">
                    Contributor {contributor}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourcesPage;
