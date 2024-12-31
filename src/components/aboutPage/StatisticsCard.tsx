import React from "react";
import CountUp from "react-countup";

interface StatisticsCardProps {
  icon: React.ElementType;
  number: number;
  label: string;
  iconColor?: string;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  icon: Icon,
  number,
  label,
  iconColor = "text-green-600",
}) => {
  return (
    <div className="relative w-[300px] ">
      <div className="relative py-10 bg-zinc-900 flex flex-col items-center justify-center rounded-md">
        <p className="text-white text-2xl font-bold">
          <CountUp end={number} duration={3} />
        </p>
        <p className="text-gray-400">{label}</p>
      </div>
      <div
        className={`w-14 h-14 flex justify-center items-center bg-zinc-900 border-[3px] border-black rounded-full absolute -top-5 left-1/2 transform -translate-x-1/2 ${iconColor}`}
      >
        <Icon size={30} />
      </div>
    </div>
  );
};

export default StatisticsCard;
