import React from "react";
import { professionalExperiences } from "../aboutPage/constant";

const Resume = () => {
  return (
    <div className="bg-black pt-20 text-white font-sans min-h-screen p-6">
      <div className=" container grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Summary Section and education */}
        <div className="flex flex-col gap-3 ">
          <section className="mb-10 ">
            <h2 className="text-2xl font-bold  pb-2 mb-4 uppercase">Summary</h2>
            <div className="relative pl-8">
              <div className="absolute h-full left-0 top-1 flex flex-col items-center justify-center ">
                <div className="w-4 h-4 border border-green-500 rounded-full"></div>
                <div className="flex-1 w-[1px] bg-green-500"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-400 uppercase">
                Iradukunda Ernest
              </h3>
              <p className=" mt-2 text-[14px] text-gray-300">
                Innovative and deadline-driven Software Developer with 3+ years
                of experience designing and implementing user-focused
                applications and systems. Skilled in taking projects from
                initial concept to final, high-quality deliverables, ensuring
                performance, scalability, and maintainability.
              </p>
              <ul className="mt-2 space-y-1">
                <li>Kigali, Rwanda, Gikonndo</li>
                <li>(250) 789-696-745</li>
                <li>tchamianest@gmail.com</li>
              </ul>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-10 ">
            <h2 className="text-2xl font-bold    pb-2 mb-4 uppercase">
              Education
            </h2>
            <div className="relative pt-8 pl-8">
              <div className="absolute h-full left-0 top-1 flex flex-col items-center justify-center ">
                <div className="w-4 h-4 border border-green-500 rounded-full"></div>
                <div className="flex-1 w-[1px] bg-green-500"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-400 uppercase">
                Bachelor of Electronic and telecommunication
              </h3>
              <p className=" italic font-bold mt-3">2019 - 2024</p>
              <p className="mt-1 text-[14px] text-gray-300">
                Universty of rwanda <br />· Fulltime ·<br /> Learning Dec 2019 -
                Sep 2024 · 4 years
                <br /> Rwanda ·<br /> RemoteRwanda · Remote A comprehensive
                program focused on the principles of electronic systems,
                telecommunications, and networking technologies. Gained hands-on
                experience in circuit design, digital signal processing, and
                wireless communication systems while completing projects in
                embedded systems and IoT. Developed strong analytical and
                problem-solving skills, with a focus on designing and
                implementing innovative solutions in the field of electronics
                and communication.
              </p>
            </div>
            <div className="relative pt-8 pl-8">
              <div className="absolute h-full left-0 top-1 flex flex-col items-center justify-center ">
                <div className="w-4 h-4 border border-green-500 rounded-full"></div>
                <div className="flex-1 w-[1px] bg-green-500"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-400 uppercase">
                Andela Technical Leadership Program
              </h3>
              <p className=" mt-2 italic font-bold ">2023 - 2024</p>
              <p className="mt-1  text-[14px] text-gray-300">
                Andela <br />· InternshipAndela ·<br /> Internship Dec 2023 -
                Sep 2024 · 10 mos
                <br />
                Dec 2023 to Sep 2024 · 10 mos
                <br /> Rwanda ·<br /> RemoteRwanda · Remote
                <br /> 🚀 Andela 9-Month Learner | Full-Stack Developer in
                Progress 🚀
                <br /> 🌐 Currently mastering back-end and front-end development
                at Andela.
                <br /> 🛠️ Skills: MongoDB · Cascading Style Sheets (CSS) · HTML
                · TypeScript · JavaScript · Postman API · Node.js · React.js ·
                Redux.js · Socket.io · Pivotal Tracker · Tailwind CSS · Next.js
                · GitHub
                <br /> 💼 Proven experience in back-end and front-end projects.
                <br />
                🔗 Lets connect and talk all things tech! #FullStackDeveloper
                MongoDB, Cascading Style Sheets (CSS) and +12 skills
              </p>
            </div>
          </section>
        </div>

        {/* Professional Section */}
        <div>
          <section className="mb-10 ">
            <h2 className="text-2xl font-bold  uppercase pb-2 mb-4">
              Professional Experience
            </h2>
            {professionalExperiences.map((prof, index) => (
              <div className="relative pt-8 pl-8" key={index}>
                <div className="absolute h-full left-0 top-1 flex flex-col items-center justify-center ">
                  <div className="w-4 h-4 border border-green-500 rounded-full"></div>
                  <div className="flex-1 w-[1px] bg-green-500"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-400 uppercase">
                  {prof.company}
                </h3>
                <p className=" italic font-bold mt-3">{prof.duration}</p>
                {/* text Section  */}
                <div className="mt-1 text-[14px] text-gray-300">
                  <div className="flex gap-2">
                    <p>{prof.company} </p>
                    <p>· {prof.workType} ·</p>
                  </div>
                  <p>Start {prof.startDate} - Present ·</p>
                  <p> {prof.location} ·</p> <p>{prof.description} </p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
