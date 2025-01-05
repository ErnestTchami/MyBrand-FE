import GlobarHero from "@/components/GlobarHero";
import Navbar from "@/components/Nabar";
import CardService from "@/components/service/Card";
import { Activity, Bell, Cloud, Coffee, HeartPulse, Star } from "lucide-react";
import React from "react";

function page() {
  const cards = [
    {
      id: 1,
      IconComponent: HeartPulse,
      title: "Health Monitoring",
      description:
        "Track your health and stay informed with real-time updates.",
    },
    {
      id: 2,
      IconComponent: Star,
      title: "Favorites",
      description: "Save and access your favorite items quickly and easily.",
    },
    {
      id: 3,
      IconComponent: Activity,
      title: "Performance",
      description: "Analyze and improve your performance efficiently.",
    },
    {
      id: 4,
      IconComponent: Cloud,
      title: "Cloud Storage",
      description: "Securely store and access your data from anywhere.",
    },
    {
      id: 5,
      IconComponent: Bell,
      title: "Notifications",
      description: "Stay updated with timely alerts and reminders.",
    },
    {
      id: 6,
      IconComponent: Coffee,
      title: "Relaxation",
      description: "Take a break and enjoy your favorite cup of coffee.",
    },
  ];
  return (
    <div className="bg-black">
      <Navbar activeLink="Services" />
      <GlobarHero
        BreadcrumbName="Services"
        pageName="Services"
        HeaderDescription="Hello, I'm Ernest Iradukunda, a dedicated and
          passionate software developer with expertise in front-end and back-end
          development. I specialize in building user-focused, seamless
          applications that combine creativity and functionality. With
          experience in technologies like React Next.js, and Node.js, I excel at
          solving complex challenges, optimizing workflows, and delivering
          innovative digital solutions."
      />
      <div className="w-full py-10 items-center flex justify-center">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 p-4">
            {cards.map((card) => (
              <CardService
                key={card.id}
                IconComponent={card.IconComponent}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
