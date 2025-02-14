"use client";
import { useFetchProductsQuery } from "@/redux/api/productApi";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import TrendingProductCard from "../ui/Card/TrendingProductCard";

export default function TrendingProduct() {
  const filter = {
    sort: "-ratingAverage",
  };
  const { data } = useFetchProductsQuery(filter);
  const products = data?.data?.result || [];

  return (
    <div className="   space-y-7">
      <div className=" flex justify-between ">
        <p className=" text-xl font-bold">Featured Products</p>
        <Link
          className="relative flex justify-center items-center gap-2 group hover:text-blue-500 duration-300"
          href={"#"}
        >
          <span>See more</span>
          <span className="relative flex items-center">
            <FaArrowRight className="relative z-10" />
            {/* Border Animation */}
            <span className="absolute bottom-0 left-1/2 w-0 rounded-full border bg-blue-500 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
          </span>
        </Link>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {[
          [0, 3, "first"],
          [3, 4, "second"],
          [4, 6, "third"],
        ].map((range, index) => (
          <div
            key={index}
            className={
              index === 0
                ? "grid grid-rows-3 gap-4 md:h-[500px]"
                : index === 1
                ? "grid grid-cols-1 md:h-[500px]"
                : index === 2
                ? "grid grid-rows-2 gap-4 md:h-[500px] "
                : ""
            }
          >
            {products.slice(range[0], range[1]).map((product: any) => (
              <TrendingProductCard
                key={product._id}
                product={product}
                variant={range[2]}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
