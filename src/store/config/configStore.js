import { configureStore } from "@reduxjs/toolkit";

import mainSlice from "../modules/mainSlice";

const store = configureStore({
  reducer: {
    mainSlice: mainSlice,
  },
});

export default store;
