import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

export const gpaStudentSlice = createApi({
  reducerPath: "gpaStudentApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getGpaStudent: builder.query({
      query: () => "/api/gpastudent",
    }),
  }),
});

export const { useGetGpaStudentQuery } = gpaStudentSlice;
