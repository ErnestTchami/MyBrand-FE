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
    <div className="container text-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-6">
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-3">
        {/* Left Section: Image */}
        <div
          className="w-full md:w-1/3 bg-zinc-950 flex justify-center"
          data-aos="fade-up"
        >
          <Image
            src={"/profile2.webp"}
            alt="Profile Image"
            className="rounded-md w-full max-w-[400px] md:max-w-none"
            width={650}
            height={650}
          />
        </div>

        {/* Right Section: Details */}
        <div className="flex-1" data-aos="fade-up" data-aos-delay="300">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Full-stack Software Developer
          </h1>
          <p className="text-sm md:text-base text-gray-400 mb-6">
            I&#39;m Iradukunda Ernest, a Backend Software Developer at SevenX,
            passionate about software development and staying ahead with the
            latest technologies. I focus on building efficient, scalable systems
            that solve real-world problems
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-sm">
            <div className="flex flex-col gap-3">
              {/* First Column Items */}
              <p className="flex items-center gap-1">
                <ChevronRight className="text-green-500 min-w-[20px]" />
                <strong className="min-w-[80px]">Birthday:</strong>
                <span className="text-gray-400">1 Janual 1999</span>
              </p>
              <p className="flex items-center gap-1">
                <ChevronRight className="text-green-500 min-w-[20px]" />
                <strong className="min-w-[80px]">Website:</strong>
                <span className="text-gray-400 break-all">
                  tchamianest@gmail.com
                </span>
              </p>
              <p className="flex items-center gap-1">
                <ChevronRight className="text-green-500 min-w-[20px]" />
                <strong className="min-w-[80px]">Phone:</strong>
                <span className="text-gray-400">+250 789 696 745</span>
              </p>
              <p className="flex items-center gap-1">
                <ChevronRight className="text-green-500 min-w-[20px]" />
                <strong className="min-w-[80px]">City:</strong>
                <span className="text-gray-400">Kigali, RWANDA</span>
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {/* Second Column Items */}
              <p className="flex items-center gap-1">
                <ChevronRight className="text-green-500 min-w-[20px]" />
                <strong className="min-w-[80px]">Age:</strong>
                <span className="text-gray-400">25</span>
              </p>
              <p className="flex items-center gap-1">
                <ChevronRight className="text-green-500 min-w-[20px]" />
                <strong className="min-w-[80px]">Degree:</strong>
                <span className="text-gray-400">Bacherous</span>
              </p>
              <p className="flex items-center gap-1">
                <ChevronRight className="text-green-500 min-w-[20px]" />
                <strong className="min-w-[80px]">Email:</strong>
                <span className="text-gray-400 break-all">
                  tchamianest@gmail.com
                </span>
              </p>
              <p className="flex items-center gap-1">
                <ChevronRight className="text-green-500 min-w-[20px]" />
                <strong className="min-w-[80px]">Current Job:</strong>
                <span className="text-gray-400">Backend developer</span>
              </p>
            </div>
          </div>

          <p className="text-sm md:text-base text-gray-400 mt-8 md:mt-10">
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
