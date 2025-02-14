import React from "react";
import Services from "../Home/Services";
import BrandOfSupport from "../Home/BrandOfSupport";
import Faq from "../ui/Faq/Faq";
import AboutUs from "../Home/about/AboutUs";

const About = () => {
  return (
    <div className=" space-y-10">
      <AboutUs />
      <Services />
      <BrandOfSupport />
      <Faq />
    </div>
  );
};

export default About;
