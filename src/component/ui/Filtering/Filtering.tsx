import { lcdCategories, refreshRate } from "@/constance/global";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";

const Filtering = ({ products }: { products: any }) => {
  const [openCategory, setOpenCategory] = useState(false);
  const [openHz, setOpenHz] = useState(false);
  const handle = (e: FieldValues) => {
    console.log(e?.target?.name);
  };
  return (
    <div className=" mt-11 space-y-5 border-2 rounded-xl px-3 py-4">
      <div>
        <div
          onClick={() => setOpenCategory(!openCategory)}
          className="flex items-center gap-3 cursor-pointer font-bold"
        >
          <p>Category</p>
          <span className="text-gray-500 dark:text-gray-400">
            {openCategory ? "−" : "+"}
          </span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ${
            openCategory ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-2 space-y-2">
            {lcdCategories?.map((category) => (
              <div key={category?.name} className="flex items-center gap-2 hover:text-gray-400 ">
                <input
                  type="checkbox"
                  name={category?.name}
                  id={category?.name}
                />
                <label className=" cursor-pointer" htmlFor={category?.name}>{category?.name}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div
          onClick={() => setOpenHz(!openHz)}
          className=" flex items-center gap-3 cursor-pointer font-bold"
        >
          <p>Refresh Rate (Hz)</p>
          <span className="text-gray-500 dark:text-gray-400">
            {openHz ? "−" : "+"}
          </span>
        </div>
        <div
          className={` overflow-hidden transition-all duration-300 ${
            openHz ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {refreshRate?.map((hz) => (
            <div className=" flex items-center gap-2">
              <input
                onClick={handle}
                type="checkbox"
                name={hz.toString()}
                id=""
              />
              <p>{hz}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filtering;
