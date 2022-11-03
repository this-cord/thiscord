import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import users from "../modules/signModule";

const store = configureStore({
  reducer: {
    users: users.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
