import React from "react";

const SkillsSection = () => {
  const skills = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 99 },
    { name: "JAVASCRIPT", level: 90 },
    { name: "Typesript", level: 80 },
    { name: "NodeJs", level: 90 },
    { name: "Nextjs", level: 80 },
    { name: "Backend-developments", level: 80 },
    { name: "Front-end", level: 95 },
  ];

  return (
    <div className="bg-black text-white w-full">
      <div className=" mx-auto  w-full">
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium uppercase">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full h-2.5 bg-gray-800  overflow-hidden">
                <div
                  className="h-full bg-green-500  transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
