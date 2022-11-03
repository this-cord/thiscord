import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://44.201.230.211:8080";

export const __signUser = createAsyncThunk(
  "user/addUsers",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(`${URL}/api/signup`, payload);
      alert("회원가입에 성공하셨습니다!");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      if (error.response.status===409) {
        alert("이미 존재하는 계정입니다.");
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __loginUser = createAsyncThunk(
  "user/loginUser",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`${URL}/api/login`, payload)
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`${URL}/api/logout`, payload, {
      })
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

