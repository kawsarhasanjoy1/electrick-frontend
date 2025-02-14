"use client";
import React from "react";
import ProductCard from "../ui/Card/ProductCard";
import { useFetchProductsQuery } from "@/redux/api/productApi";
import Filtering from "../ui/Filtering/Filtering";

const Products = () => {
  const { data } = useFetchProductsQuery(undefined);
  const products = data?.data?.result;
  
  return (
    <div className=" md:grid grid-cols-12">
      <div className=" grid col-span-3">
        <Filtering products={products} />
      </div>
      <div className=" grid col-span-9 md:grid-cols-3 lg:grid-cols-5 grid-cols-2 md:gap-3 gap-2 py-8">
        {products?.map((product: any) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
