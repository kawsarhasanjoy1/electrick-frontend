import Products from "@/component/Products/Products";
import CommonBanner from "@/component/ui/CommonBanner/CommonBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <CommonBanner
          title="Product page"
          bgImage="https://i.ibb.co.com/ynNrYTrx/images-q-tbn-ANd9-Gc-Sbl-E37z80-BZrd-Yxp-RKVVj-XC-bcluiw3-On-Guw-s.jpg"
        />
      </div>
      <div className=" px-2 md:px-10">
        <Products />
      </div>
    </div>
  );
};

export default page;
