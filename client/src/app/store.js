import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query/react";
import { admissionApi } from "../features/api/admissionSlice";
import { gpaStudentSlice } from "../features/api/gpaStudentSlice";
import { noticeSlice } from "../features/api/noticeSlice";
import { resultSlice } from "../features/api/resultSlice";
import { teacherSlice } from "../features/api/teacherSlice";
import { userSlice } from "../features/api/userSlice";

const store = configureStore({
  reducer: {
    [noticeSlice.reducerPath]: noticeSlice.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
    [admissionApi.reducerPath]: admissionApi.reducer,
    [teacherSlice.reducerPath]: teacherSlice.reducer,
    [resultSlice.reducerPath]: resultSlice.reducer,
    [gpaStudentSlice.reducerPath]: gpaStudentSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      noticeSlice.middleware,
      userSlice.middleware,
      admissionApi.middleware,
      teacherSlice.middleware,
      resultSlice.middleware,
      gpaStudentSlice.middleware
    );
  },
});

setupListeners(store.dispatch);

export default store;
