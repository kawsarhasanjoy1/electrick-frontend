import { displayFeatures } from "@/constance/global";
import React from "react";

const displayFeature = (category: string) => {
  if (category === "mobile") {
    return displayFeatures.mobile?.map((item) => ({
      label: item,
      value: item,
    }));
  }
  if (category === "tv") {
    return displayFeatures?.tv?.map((item) => ({
      label: item,
      value: item,
    }));
  }
  if (category === "iphone") {
    return displayFeatures.iphone?.map((item) => ({
      label: item,
      value: item,
    }));
  }
  if (category === "laptop") {
    return displayFeatures.laptop?.map((item) => ({
      label: item,
      value: item,
    }));
  }
  if (category === "monitor") {
    return displayFeatures.monitor?.map((item) => ({
      label: item,
      value: item,
    }));
  }
  if (category === "smartwatch") {
    return displayFeatures.smartwatch?.map((item) => ({
      label: item,
      value: item,
    }));
  }
  if (category === "tablet") {
    return displayFeatures.tablet?.map((item) => ({
      label: item,
      value: item,
    }));
  }
};

export default displayFeature;
