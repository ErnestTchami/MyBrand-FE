"use client";
import Navbar from "@/components/Nabar";
import { Instagram, Facebook, Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRef } from "react";
import Typed from "typed.js";

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Developer", "Designer", "Photographer"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="">
      <div
        className="h-[100vh] relative overflow-hidden w-full bg-cover bg-center object-cover"
        style={{ backgroundImage: "url('/background-hero.webp')" }}
      >
        <Navbar />
        <div className="w-full flex justify-center items-center">
          <div className="items-center   h-[80vh] container flex  gap-5 justify-between pt-20">
            <div className="flex flex-col gap-3">
              <p className="text-6xl font-bold">
                Iradukunda <span className="text-green-600">Ernest</span>
              </p>
              <p className="text-2xl mt-2 font-semibold">
                I&#39;m <span ref={typedRef}></span>
              </p>

              <div className="w-full flex gap-3 items-center justify-start mt-5">
                <Link
                  href={"https://www.instagram.com/tchamierenest/?hl=en"}
                  className="bg-zinc-700 hover:bg-zinc-600 h-10 w-10  rounded-full flex items-center justify-center"
                >
                  <Instagram />
                </Link>
                <Link
                  href={"/"}
                  className="bg-zinc-700 hover:bg-zinc-600 h-10 w-10 rounded-full flex items-center justify-center"
                >
                  <Facebook />
                </Link>
                <Link
                  href={"https://x.com/Tchamianest4"}
                  className="bg-zinc-700 hover:bg-zinc-600 h-10 w-10 rounded-full flex items-center justify-center "
                >
                  <Github />
                </Link>
                <Link
                  href={"https://github.com/ErnestTchami"}
                  className="bg-zinc-700 hover:bg-zinc-600 h-10 w-10 rounded-full flex items-center justify-center"
                >
                  <Twitter />
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/iradukunda-ernest/"}
                  className="bg-zinc-700 hover:bg-zinc-600 h-10 w-10 rounded-full flex items-center justify-center"
                >
                  <Linkedin />
                </Link>
              </div>
            </div>
            <div>
              <Image
                className="absolute -top-7 -right-12 z-0"
                src={"/profile2.webp"}
                alt="profile Image"
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <div className="container flex-col  py-5 flex items-center justify-center">
          <div className="text-3xl font-bold cursor-pointer mb-5">
            Tchami Ernest
          </div>
          <p className="text-center text-[12px] px-10">
            I am an experienced Full-stack Developer with a strong focus on
            Node.js and React.js. Throughout my career, I have contributed to a
            diverse range of innovative solutions. I am driven by a passion for
            creating purpose-driven products and solving complex challenges
            through the power of programming. My ultimate goal is to develop
            tools and applications that not only meet technical objectives, but
            also empower users and foster positive change in their lives and
            communities. Additionally, I have implemented DevOps best practices,
            continuous integration/continuous deployment (CI/CD), and cloud
            infrastructure management to enhance efficiency and reliability.
          </p>

          <div className="w-full flex gap-3 items-center justify-center mt-5">
            <Link
              href={"https://www.instagram.com/tchamierenest/?hl=en"}
              className="bg-green-500 hover:bg-green-600 h-7 w-7  rounded-full flex items-center justify-center text-black"
            >
              <Instagram className="h-3 w-3" />
            </Link>
            <Link
              href={"/"}
              className="bg-green-500 hover:bg-green-600 h-8 w-8 rounded-full flex items-center justify-center text-black"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href={"https://x.com/Tchamianest4"}
              className="bg-green-500 hover:bg-green-600 h-10 w-10 rounded-full flex items-center justify-center text-black"
            >
              <Github />
            </Link>
            <Link
              href={"https://github.com/ErnestTchami"}
              className="bg-green-500 hover:bg-green-600 h-8 w-8 rounded-full flex items-center justify-center text-black"
            >
              <Twitter className="h-4 w-4" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/iradukunda-ernest/"}
              className="bg-green-500 hover:bg-green-600 h-7 w-7 rounded-full flex items-center justify-center text-black"
            >
              <Linkedin className="h-3 w-3" />
            </Link>
          </div>
          <div className="w-full bg-zinc-600 h-[1px] mt-5"></div>
        </div>
      </div>
    </div>
  );
}
