"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { crownLcd, iphoneLcd, samLcd } from "@/constance/global";
import { FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: crownLcd,
    btn: "Order now",
    title: "Upgrade Your Viewing with Crown LCD Screens!",
    description:
      "Get crystal-clear visuals with our Crown LCD displays. Perfect for business and personal use with vibrant colors and energy efficiency.",
  },
  {
    id: 2,
    image: iphoneLcd,
    btn: "Order now",
    title: "High-Quality iPhone LCD Screens Available!",
    description:
      "Replace or upgrade your iPhone display with our premium LCD screens. Enjoy superior clarity, durability, and smooth touch response.",
  },
  {
    id: 3,
    image: samLcd,
    btn: "Order now",
    title: "Samsung LCD Screens – Perfect Clarity, Premium Quality!",
    description:
      "Upgrade your Samsung device with our high-resolution LCD screens. Designed for durability, sharp visuals, and excellent performance.",
  },
];

const headVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 1 } },
};
const pVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 1.4 } },
};

// Animation variants for the image content
const linkVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 1.8 } },
};
const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 1 } },
};

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const autoPlay = true;
  const intervalTime = 10000;
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, intervalTime);
    return () => clearInterval(interval);
  }, [current, autoPlay]);

  return (
    <div className="relative w-full bg-[#c2acda] max-w-7xl mx-auto overflow-hidden rounded-sm py-20 px-10">
      <div className="flex w-full justify-center items-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`min-w-full flex justify-center items-center transition-opacity duration-500 ease-in-out ${
              current === index ? "opacity-100" : "opacity-0 absolute"
            }`}
          >
            {current === index && (
              <>
                <motion.div
                  key={current}
                  className="space-y-6"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.h1
                    variants={headVariant}
                    className="text-2xl lg:text-3xl uppercase font-bold text-gray-800 overflow-hidden"
                  >
                    <span className="block">{slide.title}</span>
                  </motion.h1>
                  <motion.p
                    variants={pVariant}
                    className="text-lg text-gray-600"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div variants={linkVariant} className=" inline-block">
                    <Link
                      href="#products"
                      className="flex justify-center items-center text-sm gap-1 px-8 py-3 bg-white text-black hover:bg-black hover:text-white font-bold rounded-sm duration-300"
                    >
                      {slide.btn}
                      <FaAngleRight />
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="justify-center items-center hidden md:block"
                  initial="hidden"
                  animate="visible"
                  variants={imageVariants}
                >
                  <Image
                    src={slide.image.trim()}
                    alt="Premium LCD Display"
                    width={910}
                    height={700}
                   quality={100}
                    className="transition-transform duration-300 ease-in-out hover:scale-105 h-[400px] w-[600px]"
                  />
                </motion.div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full border border-gray-400 ${
              current === index
                ? "bg-blue-700 border-blue-700"
                : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
