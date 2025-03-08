"use client";
import Navbar from "@/components/Nabar";
import ProfileCard from "@/components/aboutPage/ProfileCard";
import React from "react";
import GlobarHero from "@/components/GlobarHero";
import StatisticsCard from "@/components/aboutPage/StatisticsCard";
import { Smile, Headset, NotebookText, Users } from "lucide-react";
import SkillsSection from "@/components/aboutPage/SkillsSection";
import HeaderSeparator from "@/components/aboutPage/HeaderSeparator";
import TestimonialCard from "@/components/aboutPage/TestimonialCard";
import IconCard from "@/components/aboutPage/FeatCard";
import { programmingItems } from "@/components/aboutPage/constant";

function page() {
  const testimonials = [
    { imageUrl: "/petit.jpg", name: "Saul Goodman", position: "CEO & Founder" },
    {
      imageUrl: "/me.jpg",
      name: "Iradukunda Ernest",
      position: "Back-end developer",
    },
    {
      imageUrl: "/wd.jpeg",
      name: "Wiclef DUSENGE",
      position: " Cofounder /wdgraphix & Chromatikk",
    },
  ];
  return (
    <div className="">
      <Navbar activeLink="About" />

      <div className="pt-20 w-full flex-col flex items-center justify-center bg-black py-2">
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

        <div className="w-full">
          <ProfileCard />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-6 py-10 my-5 w-full max-w-7xl">
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

        <div className="my-9 w-full container px-4 sm:px-6" data-aos="fade-up">
          <HeaderSeparator Header="My skills" smallHeader="skills" />
          <SkillsSection />
        </div>

        <div className="my-9 w-full container px-4 sm:px-6" data-aos="fade-up">
          <HeaderSeparator
            Header="I'm interested in"
            separatorPosition="absolute bottom-2 left-1/2 transform -translate-x-1/2 sm:left-24 sm:transform-none"
            smallHeader="Features"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmingItems.map((item, index) => (
              <IconCard key={index} text={item.text} icon={item.icon} />
            ))}
          </div>
        </div>

        <div
          className="my-14 mb-20 w-full container px-4 sm:px-6"
          data-aos="fade-up"
        >
          <HeaderSeparator
            Header="Check my Testimonials"
            separatorPosition="absolute bottom-2 left-1/2 transform -translate-x-1/2 sm:left-32 sm:transform-none"
            smallHeader="Testimonials"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {testimonials.map((item, index) => (
              <TestimonialCard
                key={index}
                text="Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
                name={item.name}
                position={item.position}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
