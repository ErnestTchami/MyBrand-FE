import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  text: string;
  name: string;
  position: string;
  imageUrl: string;
}

function TestimonialCard({
  text,
  name,
  position,
  imageUrl,
}: TestimonialCardProps) {
  return (
    <div className=" relative  text-white rounded-lg shadow-lg">
      <div className="relative mb-4 bg-zinc-900 p-3  rounded-md w-[350px] pb-16">
        <p className="text-[13px] italic">
          <span className="text-3xl font-bold text-green-600">&ldquo; </span>
          {text}
          &rdquo;
        </p>
      </div>
      <div className="flex flex-col items-center mt-6 absolute -bottom-14 left-5">
        <Image
          className="w-20 object-cover h-20 rounded-full border-[5.5px] border-black"
          src={imageUrl}
          alt={`${name}'s profile`}
          width={400}
          height={400}
        />
        <div className="ml-4">
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm text-gray-400">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
