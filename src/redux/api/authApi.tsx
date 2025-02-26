import { tagTypes } from "@/types/tagTypes";
import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (data) => ({
        url: "users/create-user",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: build.mutation({
      query: (data) => ({
        url: "auth/login-user",
        method: "POST",
        body: data,
      }),
    }),
    fetchAllUser: build.query({
      query: () => ({
        url: "users/fetch-users",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    blockUser: build.mutation({
      query: ({ data, userId }) => ({
        url: `users/block/${userId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    upUserRole: build.mutation({
      query: ({ data, userId }) => (
        console.log(data, userId),
        {
          url: `users/up-user-role/${userId}`,
          method: "PATCH",
          body: data,
        }
      ),
      invalidatesTags: [tagTypes.user],
    }),
    softDeleteUser: build.mutation({
      query: ({ data, userId }) => ({
        url: `users/soft-delete/${userId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useFetchAllUserQuery,
  useBlockUserMutation,
  useSoftDeleteUserMutation,
  useUpUserRoleMutation,
} = authApi;
