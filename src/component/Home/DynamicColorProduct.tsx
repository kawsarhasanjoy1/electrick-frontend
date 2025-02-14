import { crownLcd, iphoneLcd, samLcd } from "@/constance/global";
import Image from "next/image";
import React from "react";

const DynamicColorProduct = () => {
  const displays = [
    {
      id: 1,
      name: "Samsung OLED",
      price: "$150",
      category: "OLED Display",
      image: samLcd,
    },
    {
      id: 2,
      name: "iPhone 14 Pro",
      price: "$200",
      category: "Super Retina XDR",
      image: iphoneLcd,
    },
    {
      id: 3,
      name: "OnePlus AMOLED",
      price: "$120",
      category: "Fluid AMOLED",
      image: crownLcd,
    },
    {
      id: 4,
      name: "Xiaomi LCD",
      price: "$90",
      category: "IPS LCD",
      image: iphoneLcd,
    },
    {
      id: 5,
      name: "OnePlus AMOLED",
      price: "$110",
      category: "Fluid AMOLED",
      image: crownLcd,
    },
  ];

  const colors = [
    "bg-orange-500",
    "bg-teal-500",
    "bg-purple-500",
    "bg-blue-500",
  ];
  return (
    <div className=" grid grid-cols-1 md:grid-cols-5 items-center justify-center w-full md:border">
      {displays.map((display, index) => (
        <div
          key={display.id}
          className={`flex-shrink-0 m-4 relative overflow-hidden ${
            colors[index % colors.length]
          } rounded-lg md:max-w-xs shadow-lg h-60`}
        >
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <Image
              className="relative w-40 h-28"
              height={100}
              width={100}
              src={display.image}
              alt={display.name}
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1 text-sm uppercase">
              {display.category}
            </span>
            <div className="flex justify-between items-center">
              <span className="block font-semibold uppercase text-sm">
                {display.name}
              </span>
              <span className=" bg-white rounded-full text-xs font-bold px-3 py-2 leading-none flex items-center text-black">
                {display.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DynamicColorProduct;
