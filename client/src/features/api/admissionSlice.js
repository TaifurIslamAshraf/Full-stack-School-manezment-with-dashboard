import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

export const admissionApi = createApi({
  reducerPath: "admissionApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Admission"],
  endpoints: (builder) => ({
    addAdmission: builder.mutation({
      query: (formData) => ({
        url: "/admission",
        method: "POST",
        body: formData,
        credentials: "include",
      }),
      invalidatesTags: ["Admission"],
    }),
  }),
});

export const { useAddAdmissionMutation } = admissionApi;
