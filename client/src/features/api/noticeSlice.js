import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

export const noticeSlice = createApi({
  reducerPath: "noticeApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getNotice: builder.query({
      query: () => "/notice",
    }),
  }),
});

export const { useGetNoticeQuery } = noticeSlice;
