import Banner from "@/component/Banner/Banner";
import DynamicColorProduct from "@/component/Home/DynamicColorProduct";
import React from "react";
import TrendingProduct from "@/component/Home/TrendingProduct";
import SpecialDeals from "@/component/Home/SpecialDeals";
import TopSelling from "@/component/Home/TopSelling";
import UpcomingProducts from "@/component/Home/UpComingProduct";
import About from "@/component/About/About";
import Reviews from "@/component/ui/Review/Reviews";

const page = () => {
  return (
    <div className=" space-y-10">
      <div className="space-y-10">
        <Banner />

        <div className="px-2 md:px-10 space-y-10">
          <DynamicColorProduct />
          <TopSelling />
          <TrendingProduct />
          <SpecialDeals />
          <UpcomingProducts />
          <About />
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default page;
