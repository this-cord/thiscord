import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://44.201.230.211:8080"

export const __addUsers = createAsyncThunk(
  "users/addUsers",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${URL}/api/user/signup`,
        payload
      );
      console.log("회원가입", data);
      alert("회원가입에 성공하셨습니다!");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("에러", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
