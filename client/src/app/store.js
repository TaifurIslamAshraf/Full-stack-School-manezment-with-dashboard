import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query/react";
import { admissionApi } from "../features/api/admissionSlice";
import { noticeSlice } from "../features/api/noticeSlice";
import { teacherSlice } from "../features/api/teacherSlice";
import { userSlice } from "../features/api/userSlice";

const store = configureStore({
  reducer: {
    [noticeSlice.reducerPath]: noticeSlice.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
    [admissionApi.reducerPath]: admissionApi.reducer,
    [teacherSlice.reducerPath]: teacherSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      noticeSlice.middleware,
      userSlice.middleware,
      admissionApi.middleware,
      teacherSlice.middleware
    );
  },
});

setupListeners(store.dispatch);

export default store;
