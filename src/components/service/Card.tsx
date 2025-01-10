import React from "react";
import { LucideIcon } from "lucide-react";

interface CardProps {
  IconComponent: LucideIcon;
  title: string;
  description: string;
}

const CardService = ({ IconComponent, title, description }: CardProps) => {
  return (
    <div className="bg-zinc-900 hover:bg-green-500 text-white p-6 rounded-lg w-[400px] h-[250px] mx-auto text-center flex items-center justify-center flex-col shadow-lg">
      <div className="flex justify-center items-center mb-4">
        <div className="bg-green-500  p-4 rounded-lg shadow-md">
          <IconComponent className="text-white" size={32} />
        </div>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>

      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default CardService;
