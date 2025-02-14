"use client";
import { crownLcd } from "@/constance/global";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BrandOfSupport = () => {
  const brands = [
    { name: "Apple", logo: crownLcd },
    { name: "Samsung", logo: crownLcd },
    { name: "Xiaomi", logo: crownLcd },
    { name: "OnePlus", logo: crownLcd },
    { name: "Oppo", logo: crownLcd },
    { name: "Vivo", logo: crownLcd },
    { name: "Crown", logo: crownLcd },
    { name: "Metto", logo: crownLcd },
    { name: "Bkc", logo: crownLcd },
  ];

  return (
    <section className="py-16  bg-gray-100">
    
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800  mb-8">
          Brands We Support
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 6 },
          }}
          className="brand-carousel"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center hover:scale-105 transition"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={50}
                  height={50}
                  className="h-16 w-16 object-contain"
                />
                <h4 className="font-semibold text-lg text-gray-800 dark:text-white mt-2">
                  {brand.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BrandOfSupport;
