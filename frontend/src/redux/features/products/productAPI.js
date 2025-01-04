import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "./../../../utils/baseURL";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/products`,
  credentials: "include",
  prepareHeaders: (Headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      Headers.set("Authorization", `bearer ${token}`);
    }
    return Headers;
  },
});

const productsAPI = createApi({
  reducerPath: "productsApi",
  baseQuery,
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    fetchAllproducts: builder.query({
      query: () => "/",
      providesTags: ["Products"],
    }),
    fetchProductById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (results, error, id) => [{ type: "Products", id }],
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: `/create-product`,
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Products"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/edit/${id}`,
        method: "PUT",
        body: rest,
        headers: {
          "Content-Type": "applocation/json",
        },
      }),
      invalidatesTags: ["Products"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useFetchAllproductsQuery,
  useFetchProductByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteBookMutation,
} = productsAPI;
export default productsAPI;
