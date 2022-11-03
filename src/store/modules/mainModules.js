import { createSlice } from "@reduxjs/toolkit";
import { __getPage } from "./mainThunk";

const initialState = {
  page: []
};

export const page = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPage.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getPage.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.page = action.payload;
    },
    [__getPage.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default page;
