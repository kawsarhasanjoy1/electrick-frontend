import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CardHead = ({ name, link }: { name: string; link: string }) => {
  return (
    <div className=" flex justify-between items-center">
      <p className=" text-xl font-bold">{name}</p>

      <Link
        className="relative flex justify-center items-center gap-2 group hover:text-blue-500 duration-300"
        href={link}
      >
        <span>See more</span>
        <span className="relative flex items-center">
          <FaArrowRight className="relative z-10" />
          {/* Border Animation */}
          <span className="absolute bottom-0 left-1/2 w-0 rounded-full border bg-blue-500 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
        </span>
      </Link>
    </div>
  );
};

export default CardHead;
