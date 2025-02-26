import { tagTypes } from "@/types/tagTypes";
import { baseApi } from "./baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBlog: build.mutation({
      query: (data) => ({
        url: `blogs/create-blog`,
        method: "POST",
        body: data,
      }),
    }),
    fetchBlogs: build.query({
      query: (filters) => {
        const query = new URLSearchParams(filters).toString();
        return {
          url: `blogs/fetch-blog?${query}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.blog],
    }),
    fetchSingleBlog: build.query({
      query: (blogId) => {
        return {
          url: `blogs/fetch-blog/${blogId}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.blog],
    }),
    updateBlog: build.mutation({
      query: ({
        data,
        blogId,
      }: {
        data: Record<string, any>;
        blogId: string;
      }) => {
        return {
          url: `blogs/put-blog/${blogId}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: [tagTypes.blog],
    }),
    softDeleteBlog: build.mutation({
      query: ({ data, blogId }) => {
        return {
          url: `blogs/soft-delete/${blogId}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: [tagTypes.blog],
    }),
    DeleteBlog: build.mutation({
      query: (blogId: string) => {
        return {
          url: `blogs/delete-blog/${blogId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.blog],
    }),
  }),
});

export const {
 useCreateBlogMutation,
 useFetchBlogsQuery,
 useFetchSingleBlogQuery,
 useDeleteBlogMutation,
 useSoftDeleteBlogMutation,
} = blogApi;
