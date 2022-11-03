import { createSlice } from "@reduxjs/toolkit";
import { __getDetail, __getPage } from "./mainThunk";

const initialState = {
  page: [],
  detail: []
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

    [__getDetail.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
    },
    [__getDetail.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default page;
