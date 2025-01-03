import React from "react";

const Resume = () => {
  return (
    <div className="bg-black pt-20 text-white font-sans min-h-screen p-6">
      <div className="max-w-4xl mx-auto ">
        {/* Summary Section */}
        <div className="flex gap-3">
          <section className="mb-10 w-1/2">
            <h2 className="text-2xl font-bold uppercase border-b border-gray-600 pb-2 mb-4">
              Summary
            </h2>
            <div className="relative pl-8">
              <div className="absolute left-0 top-1 w-2 h-2 bg-green-500 rounded-full"></div>
              <h3 className="text-xl font-semibold text-green-400">
                Brandon Johnson
              </h3>
              <p className="mt-2">
                Innovative and deadline-driven Graphic Designer with 3+ years of
                experience designing and developing user-centered digital/print
                marketing material from initial concept to final, polished
                deliverable.
              </p>
              <ul className="mt-2 space-y-1">
                <li>Portland par 127, Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold uppercase border-b border-gray-600 pb-2 mb-4">
              Education
            </h2>
            <div className="relative pl-8">
              <div className="absolute left-0 top-1 w-2 h-2 bg-green-500 rounded-full"></div>
              <h3 className="text-xl font-semibold text-green-400">
                Master of Fine Arts & Graphic Design
              </h3>
              <span className="text-gray-400">2015 - 2016</span>
              <p className="mt-1">
                Rochester Institute of Technology, Rochester, NY
              </p>
            </div>
          </section>
        </div>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-bold uppercase border-b border-gray-600 pb-2 mb-4">
            Professional Experience
          </h2>
          <div className="relative pl-8">
            <div className="absolute left-0 top-1 w-2 h-2 bg-green-500 rounded-full"></div>
            <h3 className="text-xl font-semibold text-green-400">
              Senior Graphic Design Specialist
            </h3>
            <span className="text-gray-400">2019 - Present</span>
            <p className="mt-1">Experion, New York, NY</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>
                Lead in the design, development, and implementation of
                production materials.
              </li>
              <li>
                Delegate tasks to team members and provide project counsel.
              </li>
              <li>Supervise quality assessments of graphic materials.</li>
              <li>Oversee project budgets ranging from $2,000 to $25,000.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
