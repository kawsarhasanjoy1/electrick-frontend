import About from "@/component/About/About";
import CommonBanner from "@/component/ui/CommonBanner/CommonBanner";
import { crownLcd } from "@/constance/global";

import React from "react";

const page = () => {
  return (
    <div className=" space-y-10">
      <CommonBanner bgImage={crownLcd} title="About page" />
      <About />
    </div>
  );
};

export default page;
