import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

export const resultSlice = createApi({
  reducerPath: "resultSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getResult: builder.query({
      query: ({ studentId, semester, examYear }) =>
        `/resultcard?studentId=${studentId}&semester=${semester}&examYear=${examYear}`,
    }),
  }),
});

export const { useGetResultQuery } = resultSlice;
