import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProfileCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <div className="container  text-white min-h-screen flex flex-col items-center justify-center px-6">
      <div className="w-full flex gap-3">
        {/* Left Section: Image */}
        <div
          className="flex justify-center w-1/3 bg-zinc-950"
          data-aos="fade-up"
        >
          <Image
            src={"/profile2.webp"}
            alt="Profile Image"
            className="rounded-md"
            width={650}
            height={650}
          />
        </div>
        {/* Right Section: Details */}
        <div className="flex-1" data-aos="fade-up" data-aos-delay="300">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Full-stack Software Developer
          </h1>
          <p className="text-sm md:text-base text-gray-400 mb-6 ">
            I&#39;m Iradukunda Ernest, a Backend Software Developer at SevenX,
            passionate about software development and staying ahead with the
            latest technologies. I focus on building efficient, scalable systems
            that solve real-world problems
          </p>
          <div className="grid grid-cols-2 gap-y-4 text-sm">
            <div className="flex flex-col gap-3">
              <p className="flex  justify-start items-center">
                <ChevronRight className="text-green-500" />
                <strong>Birthday:</strong> 1 Janual 1999
              </p>
              <p className="flex  justify-start items-center">
                <ChevronRight className="text-green-500" />
                <strong>Website:</strong> tchamianest@gmail.com
              </p>
              <p className="flex  justify-start items-center">
                <ChevronRight className="text-green-500" />
                <strong>Phone:</strong> +250 789 696 745
              </p>
              <p className="flex  justify-start items-center">
                <ChevronRight className="text-green-500" />
                <strong>City:</strong> Kigali , RWANDA
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="flex  justify-start items-center">
                <ChevronRight className="text-green-500" />
                <strong>Age:</strong> 25
              </p>
              <p className="flex  justify-start items-center">
                <ChevronRight className="text-green-500" />
                <strong>Degree:</strong> Bacherous
              </p>
              <p className="flex  justify-start items-center">
                <ChevronRight className="text-green-500" />
                <strong>Email:</strong> tchamianest@gmail.com
              </p>
              <p className="flex  justify-start items-center">
                <ChevronRight className="text-green-500" />
                <strong>Current Job:</strong> Backend developer
              </p>
            </div>
          </div>
          <p className="text-xs pt-10 md:text-base text-gray-400 mb-6 ">
            As a Backend Software Developer, I am passionate about building
            efficient, scalable systems that solve real-world challenges. I
            focus on creating robust infrastructures, optimizing databases, and
            designing APIs to ensure speed and reliability. Always eager to
            learn and adopt new technologies, I strive to craft intuitive and
            scalable solutions that evolve with business needs and make a
            meaningful impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
