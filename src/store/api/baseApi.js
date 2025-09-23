import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../../utils/env.js";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["Auth"],
  baseQuery: fetchBaseQuery({
    baseUrl: env.API_BASE_TEST_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = baseApi;
