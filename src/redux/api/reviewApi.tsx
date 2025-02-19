import { tagTypes } from "@/types/tagTypes";
import { baseApi } from "./baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createReview: build.mutation({
      query: (data) => ({
        url: "reviews/create-review",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.review],
    }),
    fetchReviews: build.query({
      query: () => ({
        url: "reviews/fetch-reviews",
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),
  }),
});

export const { useCreateReviewMutation, useFetchReviewsQuery } = reviewApi;
