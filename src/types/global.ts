import { ReactNode } from "react";

export type Children = {
  children: ReactNode;
};

export interface TProduct {
  _id: string;
  userId: string;
  name: string;
  price: number;
  discountPrice: number;
  image: string;
  description: string;
  quantity: number;
  brand: string;
  modelNumber: string;
  category: string;
  features?: [];
  screenSize: number;
  resolution: [];
  refreshRate: [];
  displayType: string;
  hdrSupport?: boolean;
  quality: "original" | "medium" | "high" | "custom";
  isDeleted: boolean;
  sold: number;
  ratingAverage: number;
  ratingQuantity: number;
  status: "available" | "upcoming";
}
