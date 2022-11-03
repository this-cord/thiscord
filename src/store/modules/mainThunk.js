import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://44.201.230.211:8080";
const wsURL = "ws://44.201.230.211:8080";

export const __getPage = createAsyncThunk(
  "chat/room",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`${URL}/chat/room`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("AccessToken")}`,
        },
      });
      return thunkAPI.fulfillWithValue(data.data.check.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getDetail = createAsyncThunk(
  "chat/room/enter",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await axios.post(`${wsURL}/chat/room/enter/${payload}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("AccessToken")}`,
        },
      });
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
