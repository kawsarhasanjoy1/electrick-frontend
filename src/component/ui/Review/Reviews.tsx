"use client";
import React from "react";
import ReviewCarousel from "./ReviewCarousel";
import { useFetchReviewsQuery } from "@/redux/api/reviewApi";

const Reviews = () => {
  const { data } = useFetchReviewsQuery(undefined);
  const review = data?.data;
  return (
    <div>
      <ReviewCarousel reviews={review} />
    </div>
  );
};

export default Reviews;
