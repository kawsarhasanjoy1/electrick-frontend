"use client";
import AddProductModel from "@/component/Model/AddProductModel";
import React, { useState } from "react";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className=" flex justify-between items-center mt-4">
        <p className=" text-xl font-bold">Products</p>

        {/* <button className=" uppercase text-white bg-gradient-to-r from-blue-400 to-blue-600 px-4 py-2 rounded-md text-sm ">
          Add product
        </button> */}
        <div>
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full font-semibold shadow-xs transition-all duration-500 hover:bg-indigo-700"
          >
            Open Modal
          </button>
          <AddProductModel setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      </div>
      <div>Our product</div>
    </div>
  );
};

export default page;
