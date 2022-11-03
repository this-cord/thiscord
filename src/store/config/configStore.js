import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import page from "../modules/mainModules";
import users from "../modules/signModule";


const store = configureStore({
  reducer: {
    users: users.reducer,
    post : page.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  })
});

export default store;
