import { tagTypes } from "@/types/tagTypes";
import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (data) => ({
        url: `products/create-product`,
        method: "POST",
        body: data,
      }),
    }),
    fetchProducts: build.query({
      query: (filters) => {
        const query = new URLSearchParams(filters).toString();
        return {
          url: `products/fetch-products?${query}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.products],
    }),
    fetchSingleProduct: build.query({
      query: (productId) => {
        return {
          url: `products/fetch-product/${productId}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.products],
    }),
    updateProduct: build.mutation({
      query: ({
        data,
        productId,
      }: {
        data: Record<string, any>;
        productId: string;
      }) => {
        return {
          url: `products/put-product/${productId}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: [tagTypes.products],
    }),
    softDeleteProduct: build.mutation({
      query: ({ data, productId }) => {
        return {
          url: `products/soft-delete/${productId}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: [tagTypes.products],
    }),
    DeleteProduct: build.mutation({
      query: (productId: string) => {
        return {
          url: `products/delete-product/${productId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.products],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useFetchProductsQuery,
  useFetchSingleProductQuery,
  useSoftDeleteProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
