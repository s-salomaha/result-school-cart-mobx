import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../types/IProduct";

export const productsApiSlice = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: "https://mocki.io/v1" }),
  endpoints(builder) {
    return {
      getProducts: builder.query<IProduct[], void>({
        query: () => ({
          url: '/7cb68f31-bfdc-433a-8a26-6535b269d930'
        })
      })
    }
  }
})

export const { useGetProductsQuery } = productsApiSlice
