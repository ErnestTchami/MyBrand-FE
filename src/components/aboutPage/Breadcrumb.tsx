"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface BreadcrumbProps {
  activePath: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ activePath }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const currentPath = activePath.split("/").filter(Boolean);

  return (
    <nav className="bg-zinc-900  px-5 text-sm w-full py-5">
      <div className="container  mx-auto">
        <ul className="flex items-center space-x-2 text-white">
          <li>
            <Link
              href="/"
              className="text-green-500 hover:underline text-base font-bold"
            >
              Home
            </Link>
          </li>
          {currentPath.map((segment, index) => {
            const isLast = index === currentPath.length - 1;
            const pathUrl = `/${currentPath.slice(0, index + 1).join("/")}`;

            return (
              <li key={index} className="flex items-center">
                <span className="text-gray-400 mx-2">/</span>
                {!isLast ? (
                  <a
                    href={pathUrl}
                    className="hover:underline text-gray-300 font-bold capitalize"
                  >
                    {segment}
                  </a>
                ) : (
                  <span className="text-gray-300 capitalize font-bold text-base">
                    {segment}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Breadcrumb;
