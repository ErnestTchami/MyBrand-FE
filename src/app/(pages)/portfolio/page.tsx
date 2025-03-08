"use client";
import Navbar from "@/components/Nabar";
import GlobarHero from "@/components/GlobarHero";
import { Eye, Star, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  previewImage: string;
  rating: number;
  category: string;
  demoLink: string;
  price?: number;
  description: string;
}

function Page() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isHoveringPreview, setIsHoveringPreview] = useState(false);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "React Portfolio Website",
      image: "/portifolio.png",
      previewImage: "/portifolio.png",
      rating: 4,
      category: "Web Development",
      demoLink: "https://my-brand-fe.vercel.app/portfolio",
      description:
        "A modern and responsive portfolio website template built with React. Perfect for showcasing your work and professional experience.",
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={`h-5 w-5 ${
            index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <div>
      <Navbar activeLink="Portfolio" />
      <div className="pt-20 w-full flex-col flex items-center justify-center bg-black py-2">
        <GlobarHero
          BreadcrumbName="portfolio"
          pageName="Portfolio"
          HeaderDescription="Explore my collection of <strong>web development projects</strong> and creative works. Each project demonstrates my commitment to creating engaging, user-friendly, and innovative digital solutions."
        />

        {/* Portfolio Grid */}
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-zinc-900 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-green-500/20 group"
                data-aos="fade-up"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="h-[200%] relative w-full transform transition-transform duration-[6s] ease-out group-hover:translate-y-[-50%]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="w-full object-cover"
                        width={500}
                        height={1000}
                        style={{
                          height: "auto",
                          maxWidth: "100%",
                        }}
                        priority
                      />
                    </div>
                  </div>

                  {/* <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.type === "Premium"
                          ? "bg-orange-500"
                          : "bg-green-500"
                      }`}
                    >
                      {item.type}
                    </span>
                  </div> */}

                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-1">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">{renderStars(item.rating)}</div>
                    {/* {item.type === "Premium" && (
                      <span className="text-white font-bold">
                        ₹{item.price}
                      </span>
                    )} */}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">
                      {item.category}
                    </span>
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      <Eye className="h-4 w-4" />
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedItem && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-zinc-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    {selectedItem.title}
                  </h2>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div
                  className="relative h-[400px] mb-6 overflow-hidden rounded-lg"
                  onMouseEnter={() => setIsHoveringPreview(true)}
                  onMouseLeave={() => setIsHoveringPreview(false)}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className={`h-[200%] relative w-full transform transition-transform duration-[8s] ease-out ${
                        isHoveringPreview
                          ? "translate-y-[-50%]"
                          : "translate-y-0"
                      }`}
                    >
                      <Image
                        src={selectedItem.previewImage}
                        alt={selectedItem.title}
                        className="w-full object-cover"
                        width={800}
                        height={1600}
                        style={{
                          height: "auto",
                          maxWidth: "100%",
                        }}
                        priority
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                  <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-zinc-900 to-transparent"></div>

                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                      isHoveringPreview ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <div className="bg-black/60 px-4 py-2 rounded-full text-white text-sm flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      Hover to view full website
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-300">{selectedItem.description}</p>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {/* <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          selectedItem.type === "Premium"
                            ? "bg-orange-500"
                            : "bg-green-500"
                        }`}
                      >
                        {selectedItem.type}
                      </span> */}
                      <span className="text-gray-400">
                        {selectedItem.category}
                      </span>
                    </div>

                    <a
                      href={selectedItem.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-300"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
