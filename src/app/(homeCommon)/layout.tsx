import Footer from "@/component/shared/Footer";
import Navbar from "@/component/shared/Navber";
import { Children } from "@/types/global";
import React from "react";

const layout = ({ children }: Children) => {
  return (
    <div className=" border-red-50 w-full">
      <div>
        <Navbar />
      </div>
      {children}
      <div className=" ">
        <Footer />
      </div>
    </div>
  );
};

export default layout;
