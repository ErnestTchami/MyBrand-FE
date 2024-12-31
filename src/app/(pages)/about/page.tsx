"use client";
import Navbar from "@/components/Nabar";
import ProfileCard from "@/components/aboutPage/ProfileCard";
import React from "react";
import GlobarHero from "@/components/GlobarHero";
import StatisticsCard from "@/components/aboutPage/StatisticsCard";
import { Smile, Headset, NotebookText, Users } from "lucide-react";

function page() {
  return (
    <div className="">
      <Navbar activeLink="About" />

      <div className="pt-20 w-full flex-col flex items-center justify-center bg-black py-2 ">
        <GlobarHero
          BreadcrumbName="about"
          pageName="About"
          HeaderDescription="Hello, I'm <strong>Ernest Iradukunda</strong>, a dedicated and
          passionate software developer with expertise in front-end and back-end
          development. I specialize in building user-focused, seamless
          applications that combine creativity and functionality. With
          experience in technologies like React Next.js, and Node.js, I excel at
          solving complex challenges, optimizing workflows, and delivering
          innovative digital solutions. I thrive on creating impactful tools
          that empower businesses and individuals. Welcome to my portfolio,
          where passion meets purpose!"
        />
        <div>
          <ProfileCard />
        </div>

        <div className="flex gap-4 py-10 my-5">
          <div data-aos="fade-up">
            <StatisticsCard icon={Smile} label="Happy client" number={200} />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <StatisticsCard
              icon={NotebookText}
              label="Project Done"
              number={60}
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <StatisticsCard
              icon={Headset}
              label="Hours of Support"
              number={3000}
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="600">
            <StatisticsCard icon={Users} label="Collaborators" number={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
