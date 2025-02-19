"use client";
import ProductDetails from "@/component/ui/DetailsCard/DetailsCard";
import { useFetchSingleProductQuery } from "@/redux/api/productApi";
import React, { use } from "react";

const page = ({ params }: { params: Promise<{ productId: string }> }) => {
  const { productId } = use(params);
  const { data, refetch } = useFetchSingleProductQuery(productId);

  return <div className=" ">{<ProductDetails refetch={refetch} product={data?.data} />}</div>;
};

export default page;
