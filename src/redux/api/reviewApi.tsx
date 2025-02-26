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
      query: (filters) => {
        const query = new URLSearchParams(filters).toString();
        return {
          url: `reviews/fetch-reviews?${query}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.review],
    }),
    softDeleteReviews: build.mutation({
      query: ({ data, userId }) => ({
        url: `reviews/soft-delete/${userId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.review],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useFetchReviewsQuery,
  useSoftDeleteReviewsMutation,
} = reviewApi;
