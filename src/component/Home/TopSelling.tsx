"use client";
import { useFetchProductsQuery } from "@/redux/api/productApi";
import ProductCard from "../ui/Card/ProductCard";
import CardHead from "../ui/Card/CardHead";
const TopSelling = () => {
  const filter = {
    sort: "-sold",
    limit: 12,
  };

  
  const { data } = useFetchProductsQuery(filter);
  const products = data?.data?.result;
  return (
    <div
     className=" h-full flex flex-col space-y-3">
      <div>
        <CardHead name="Top Selling product" link="#"/>
      </div>
      <div className=" grid md:grid-cols-3 lg:grid-cols-6 grid-cols-2 md:gap-3 gap-2 py-8 ">
        {products?.map((product: any) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
