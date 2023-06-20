import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

export const teacherSlice = createApi({
  reducerPath: "teacherApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getAllTeacher: builder.query({
      query: () => "/teacher",
    }),
  }),
});

export const { useGetAllTeacherQuery } = teacherSlice;
