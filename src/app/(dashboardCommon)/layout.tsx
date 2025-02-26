import Sidebar from "@/component/dashboard/sidebar/Sidebar";
import { Children } from "@/types/global";
import React from "react";

const layout = ({ children }: Children) => {
  return (
    <div className=" md:grid grid-cols-12">
      <div className=" grid col-span-2">
        <Sidebar />
      </div>
      <div className=" grid col-span-10 md:px-10">{children}</div>
    </div>
  );
};

export default layout;
