import GlobarHero from "@/components/GlobarHero";
import Navbar from "@/components/Nabar";
import React from "react";

function page() {
  return (
    <div>
      <Navbar activeLink="Contact" />
      <div className="pt-20 w-full flex-col flex items-center justify-center bg-black py-2 ">
        <GlobarHero
          BreadcrumbName="contact"
          pageName="Contact"
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
      </div>
    </div>
  );
}

export default page;
