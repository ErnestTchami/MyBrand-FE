import React from "react";

interface IconCardProps {
  text: string;
  icon: React.ReactNode;
  className?: string;
}

function IconCard({ text, icon, className = "" }: IconCardProps) {
  return (
    <div
      className={`flex items-center bg-zinc-900 text-white p-5  border border-gray-700 w-[300px] shadow-md ${className}`}
    >
      <div className="text-yellow-500 text-2xl mr-3">{icon}</div>
      <span className="text-lg font-medium">{text}</span>
    </div>
  );
}

export default IconCard;
