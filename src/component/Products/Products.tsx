"use client";
import React from "react";
import ProductCard from "../ui/Card/ProductCard";
import { useFetchProductsQuery } from "@/redux/api/productApi";
import Filtering from "../ui/Filtering/Filtering";
import { useRouter, useSearchParams } from "next/navigation";
import { FieldValues } from "react-hook-form";
import NotFound from "../ui/NotFound/NotFound";
import Loading from "@/app/loading";

const Products = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filters: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    filters[key] = value;
  });

  const { data, isLoading } = useFetchProductsQuery(filters);
  if (isLoading) {
    return <Loading />;
  }
  const products = data?.data?.result;
  const handleToSort = (e: FieldValues) => {
    const sortValue = e?.target?.value;
    updateParams("sort", sortValue);
  };
  const handleToSearch = (e: FieldValues) => {
    const searchValue = e?.target?.value;
    updateParams("searchTerm", searchValue);
  };
  const updateParams = (key: string, value: any) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };
  return (
    <div className=" space-y-14 mt-10">
      <div className=" flex justify-between items-center">
        <input
          onChange={handleToSearch}
          className=" border-2 rounded-md outline-none md:px-4 px-2 py-2"
          placeholder=" search product"
          type="search"
          name=""
          id=""
        />
        <div>
          <select
            className="border-2 border-blue-500 text-gray-700 bg-white md:px-6 px-2 py-2 rounded-lg shadow-md outline-none transition-all duration-300 hover:border-blue-600 focus:ring-2 focus:ring-blue-300 focus:border-blue-600"
            onChange={handleToSort}
          >
            <option className="font-semibold text-gray-600">
              Sort product
            </option>
            <option value="-price" className="font-medium">
              High to Low
            </option>
            <option value="price" className="font-medium">
              Low to High
            </option>
            <option value="-createdAt" className="font-medium">
              Newest First
            </option>
            <option value="createdAt" className="font-medium">
              Oldest First
            </option>
          </select>
        </div>
      </div>
      <div className=" md:grid grid-cols-12 gap-10 border-t-2">
        <div className=" grid col-span-3 sticky top-0 h-screen overflow-y-auto ">
          <Filtering />
        </div>

        {products?.length > 0 ? (
          <div className=" grid col-span-9 md:grid-cols-3 lg:grid-cols-5 grid-cols-2 md:gap-3 gap-2 py-8 auto-rows-min">
            {products?.map((product: any) => (
              <ProductCard key={product?._id} product={product} />
            ))}
          </div>
        ) : (
          <div className=" grid col-span-9">
            {" "}
            <NotFound link={"/products"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
