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
      strings: [
        "Passionate Software Developer",
        "Software Developer",
        "Tech Enthusiast",
      ],
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
        <Navbar activeLink="Home" />
        <div className="w-full flex justify-center items-center">
          <div className="items-center   h-[80vh] container flex  gap-5 justify-between pt-20">
            <div className="flex flex-col gap-3">
              <p className="text-6xl font-bold">
                Iradukunda <span className="text-green-600">Ernest</span>
              </p>
              <p className="text-2xl mt-2 font-semibold">
                I&#39;m <code className="" ref={typedRef}></code>
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
    </div>
  );
}
