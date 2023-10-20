import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApiSlice = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mocki.io/v1' }),
  endpoints(build) {
    return {
      createOrder: build.mutation<{success: boolean}, void>({
        query: () => ({
          url: '/ef0ab56e-437a-4833-999d-8cc5803101ea'
        })
      })
    }
  }
})
