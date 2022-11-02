import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [{
    
  }],
}

export const users = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
  },
});

export default users;
