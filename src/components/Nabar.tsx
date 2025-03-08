"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { ScrollProgress } from "./ScrollProgressProps";

const Navbar = ({ activeLink }: { activeLink: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full fixed z-50 top-0 left-0 transition-all duration-300 ${
        isScrolled || menuOpen
          ? "bg-black/50 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto text-white flex flex-wrap items-center justify-between px-6 py-6">
        <Link href={"/"} passHref>
          <div className="text-xl sm:text-2xl font-bold cursor-pointer">
            Tchami Ernest
          </div>
        </Link>

        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div
          className={`w-full lg:w-auto lg:flex ${
            menuOpen
              ? "block bg-black/80 lg:bg-transparent p-4 rounded-lg mt-4"
              : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-9 mt-4 lg:mt-0">
            {[
              "Home",
              "About",
              "Resume",
              "Services",
              "Portfolio",
              "Contact",
              "Resources",
            ].map((item) => (
              <Link
                href={`/${
                  item.toLowerCase() === "home" ? "" : item.toLowerCase()
                }`}
                key={item}
              >
                <li
                  className={`relative group cursor-pointer hover:text-green-500 transition-all duration-300 font-medium text-[14px] flex items-center justify-center ${
                    activeLink === item ? "text-green-500 h-full" : ""
                  }`}
                >
                  {item}
                  <div
                    className={`absolute left-0 ${
                      activeLink === item
                        ? "-bottom-2 h-[2.5px] w-1/2 bg-green-500"
                        : "-bottom-2 h-[2.5px] w-0 bg-green-500"
                    } transition-all duration-300 group-hover:w-2/3`}
                  ></div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <ScrollProgress className="top-[80px] bg-white" />
      </nav>
    </div>
  );
};

export default Navbar;
