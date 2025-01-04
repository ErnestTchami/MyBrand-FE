import GlobarHero from "@/components/GlobarHero";
import Navbar from "@/components/Nabar";
import Resume from "@/components/resume/Resume";
import React from "react";

function page() {
  return (
    <div className="bg-black">
      <Navbar activeLink="Resume" />
      <GlobarHero
        BreadcrumbName="Resume"
        pageName="Resume"
        HeaderDescription="Hello, I'm Ernest Iradukunda, a dedicated and
          passionate software developer with expertise in front-end and back-end
          development. I specialize in building user-focused, seamless
          applications that combine creativity and functionality. With
          experience in technologies like React Next.js, and Node.js, I excel at
          solving complex challenges, optimizing workflows, and delivering
          innovative digital solutions. I thrive on creating impactful tools
          that empower businesses and individuals. Welcome to my portfolio,
          where passion meets purpose!"
      />
      <div className=" flex items-center justify-center">
        <Resume />
      </div>
    </div>
  );
}

export default page;
