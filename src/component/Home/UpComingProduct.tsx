"use client";

import { useFetchProductsQuery } from "@/redux/api/productApi";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const UpcomingProducts = () => {
  const filter = { status: "upcoming", sort: "-createdAt" };
  const { data, isLoading } = useFetchProductsQuery(filter);
  const products = data?.data?.result || [];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center text-center py-16 px-4 bg-gradient-to-r from-blue-700 to-indigo-900 text-white">
        <h1 className="text-2xl md:text-4xl font-extrabold">
          {" "}
          Upcoming LCDs & Tech
        </h1>
        <p className="text-lg mt-4 max-w-2xl">
          Stay ahead of the tech curve! Explore the latest LCDs and gadgets
          launching soon.
        </p>
      </div>

      {/* Product Grid (2 cards per row) */}
      <div className="px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products?.slice(0, 4)?.map((product: any, index: number) => (
            <motion.div
              key={product._id}
              whileHover={{ rotateY: 20, rotateX: -10 }}
              className={`overflow-hidden rounded-xl shadow-lg bg-white ${"flex flex-col-reverse md:flex-row"}`}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={350}
                priority
                height={350}
                className="md:w-1/2 w-full h-60 object-cover"
              />
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    {product.description.slice(0, 60)}...
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-blue-600">
                    {product.price} ৳
                  </span>
                  <span className="bg-yellow-400 text-black px-3 py-1 text-xs rounded ">
                    {product?.status === "upcoming" ? "Coming soon" : ""}
                  </span>
                </div>
                <Link
                  href={`/product/${product._id}`}
                  className="mt-4 flex items-center text-blue-500 hover:text-blue-700 font-semibold"
                >
                  View Details <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingProducts;
