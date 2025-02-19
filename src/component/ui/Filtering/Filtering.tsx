import { FilteringData } from "@/constance/global";
import { Rating } from "@smastrom/react-rating";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Filtering = () => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const rating = Number(params.toString().split("=")[1]);
  console.log(rating);
  const applyPriceFilter = () => {
    if (minPrice !== "") {
      params.set("minPrice", minPrice.toString());
    } else {
      params.delete("minPrice");
    }
    if (maxPrice !== "") {
      params.set("maxPrice", maxPrice.toString());
    } else {
      params.delete("maxPrice");
    }
    router.push(`${path}?${params.toString()}`, { scroll: false });
  };

  const handleToRating = (e: number) => {
    if (Number(rating) !== 0) {
      params.set("rating", e.toString());
    } else {
      params.delete("rating");
    }
    router.push(`${path}?${params.toString()}`, { scroll: false });
  };

  // State for dropdowns
  const [openFilters, setOpenFilters] = useState<{ [key: string]: boolean }>({
    category: false,
    brand: false,
    displayType: false,
    quality: false,
    resolution: false,
    status: false,
    discountPrice: false,
    refreshRate: false,
  });

  // Get selected filters from URL
  const getSelectedFilters = (key: string) => {
    return params.getAll(key);
  };

  // Handle changes to filters
  const handleFilterChange = (key: string, value: string) => {
    let currentValues = getSelectedFilters(key);

    if (currentValues.includes(value)) {
      currentValues = currentValues.filter((item) => item !== value);
      params.delete(key);
      currentValues.forEach((val) => params.append(key, val));
    } else {
      params.set(key, value);
    }

    router.push(`${path}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="mt-11 space-y-5 border-2 rounded-xl px-3 py-4">
      {/* Reusable Filter UI */}
      {FilteringData?.map(({ key, label, options }, index) => (
        <div key={index}>
          <div
            onClick={() =>
              setOpenFilters({ ...openFilters, [key]: !openFilters[key] })
            }
            className="flex items-center gap-3 cursor-pointer font-bold"
          >
            <p>{label}</p>
            <span className="text-gray-500 dark:text-gray-400">
              {openFilters[key] ? "−" : "+"}
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              openFilters[key]
                ? "sticky top-0 overflow-y-auto opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-2 space-y-2">
              {options.map((option) => (
                <div
                  key={option}
                  className="flex items-center gap-2 hover:text-gray-400"
                >
                  <input
                    type="checkbox"
                    checked={getSelectedFilters(key).includes(option)}
                    onChange={() => handleFilterChange(key, option)}
                    id={`${key}-${option}`}
                  />
                  <label
                    className="cursor-pointer"
                    htmlFor={`${key}-${option}`}
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className="mt-4 space-y-5  rounded-xl ">
        {/* ✅ Price Range Filter */}
        <div>
          <p className="font-bold">Price Range</p>
          <div className=" space-y-4">
            <div>
              <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value) || "")}
                className="border p-1 w-24 rounded-md  outline-none"
              />
              <span>—</span>
              <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value) || "")}
                className="border p-1 w-24 rounded-md  outline-none"
              />
            </div>
            <button
              onClick={applyPriceFilter}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
      <div className=" space-y-2">
        <p className=" text-xl font-bold mt-2">Filter with rating</p>
        <Rating
          value={rating as number}
          onChange={handleToRating}
          style={{ width: 150 }}
        />
      </div>
    </div>
  );
};

export default Filtering;
