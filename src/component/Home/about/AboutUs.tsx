import { samLcd } from "@/constance/global";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto md:px-4 px-2 py-16 rounded-lg border-2">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl  text-gray-900 font-poppins ">AboutUs Us</h1>
        <p className="text-xl text-gray-700 mt-4">
          Your Trusted LCD Solution Provider
        </p>
      </div>

      {/* Company Info */}
      <div className="flex flex-col md:flex-row items-center gap-12 rounded-xl ">
        <div className=" relative">
          <Image
            priority
            src={samLcd}
            width={500}
            height={300}
            alt="Our Company"
            className="rounded-lg md:w-[550px] md:h-[470px] w-full h-full"
          />
          <div className=" absolute inset-0 bg-gray-700 opacity-10 rounded-xl"></div>
          <div className=" absolute border border-red-500"></div>
        </div>
        <div className="max-w-md">
          <h2 className="text-[20px] font-semibold text-gray-700 uppercase">
            Premium Quality LCD Screens – Vibrant Colors, Sharp Contrast &
            Smooth Touch
          </h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Experience crystal-clear visuals with our high-quality LCD screens
            designed for mobile phones, tablets, and laptops. Our premium
            displays offer vibrant colors, sharp contrast, and smooth touch
            sensitivity, ensuring an exceptional viewing experience. Built for
            durability and performance, our LCD screens provide seamless
            integration and long-lasting reliability. Whether you need a
            replacement or an upgrade, our products guarantee the best visual
            clarity and responsiveness at competitive prices. Choose the best,
            choose quality—because your screen deserves perfection.
          </p>
          <div className=" mt-6 flex gap-4">
            <button className="bg-blue-500 px-10 py-3 rounded-full hover:bg-transparent border-2 border-blue-500 hover:text-black text-white duration-300 uppercase text-sm">
              Learn More
            </button>
            <Link href="tel:+01405951898">
              <button className="bg-red-500 px-10 py-3 rounded-full hover:bg-transparent border-2 border-red-500 hover:text-black text-white duration-300 uppercase text-sm">
                +01405951898
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
