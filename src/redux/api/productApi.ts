import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (data) => {
        return {
          url: `products/create-product`,
          method: "POST",
          body: data,
        };
      },
    }),
    fetchProducts: build.query({
      query: (filters) => {
        const query = new URLSearchParams(filters).toString();
        return {
          url: `products/fetch-products?${query}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useCreateProductMutation, useFetchProductsQuery } = productApi;
