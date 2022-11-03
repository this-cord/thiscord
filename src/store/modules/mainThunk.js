import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://44.201.230.211:8080";

export const __getPage = createAsyncThunk(
  "chat/room",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`${URL}/chat/room`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("AccessToken")}`,
        },
      });
      console.log(thunkAPI.fulfillWithValue(data.data.check.data));
      return thunkAPI.fulfillWithValue(data.data.check.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
