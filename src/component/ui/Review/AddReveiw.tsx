"use client";
import EFrom from "@/form/EFrom";
import EInput from "@/form/EInput";
import ETextAria from "@/form/ETextAria";
import { useCreateReviewMutation } from "@/redux/api/reviewApi";
import { useAppSelector } from "@/redux/hook";
import { Rating } from "@smastrom/react-rating";
import React from "react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const AddReview = ({ refetch, product }: any) => {
  const [rating, setRating] = useState(1);
  const { user } = useAppSelector((store) => store.auth);
  const [createReview, { isLoading }] = useCreateReviewMutation();
  const handleSubmit = async (e: FieldValues) => {
    try {
      const productId = product?._id;
      const userId = user?.userId;
      const review = e?.review;
      const newReview = { productId, userId, rating, review };
      console.log(newReview);
      const res = await createReview(newReview).unwrap();
      if (res?.success) {
        toast.success("Added review");
      }
    } catch (err: any) {
      toast.error(err?.data?.message);
    }
  };

  return (
    <div className="bg-gray-50 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6 uppercase">
          Add review
        </h2>

        {/* Review Form */}
        <div className="mb-8">
          <h3 className="text-xl text-gray-700 mb-3">Leave a Review</h3>
          <EFrom onSubmit={handleSubmit}>
            <div className="mt-6 flex items-center">
              <label htmlFor="rating" className="block text-gray-600 mr-3">
                Rating:
              </label>
              <Rating
                onChange={(e: number) => setRating(e)}
                value={rating}
                style={{ width: 150 }}
              />
            </div>
            <div className="mt-6">
              <ETextAria
                required={true}
                label="Review"
                name="review"
                placeholder="please review........"
                type="text"
                edit=""
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Submit Review
            </button>
          </EFrom>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
