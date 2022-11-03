import { createSlice } from "@reduxjs/toolkit";
import { __loginUser, __signUser } from "./signThunk";

const initialState = {
  user: [{
    
  }],
  isLoading: false,
  isLogin: false,
};

export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
  },
  extraReducers: {
    [__signUser.pending]: (state, action) => {
      state.isLoading = true; 
    },
    [__signUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      alert(`${action.meta.arg.name}님 회원가입을 축하합니다. 로그인 해주세요.`)
    },
    [__signUser.rejected]: (state, action) => {
      state.isLoading = false; 
      state.message = "데이터를 불러오지 못했습니다.";
    },
    [__loginUser.pending]: (state, action) => {
      state.isLoading = true;
      state.isLogin = false;
    },
    [__loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLogin = true;
      sessionStorage.setItem("AccessToken", action.payload.headers.accesstoken);
      sessionStorage.setItem("RefreshToken", action.payload.headers.refreshtoken);
      alert("로그인 성공");
    },
    [__loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isLogin = false;
      alert("아이디와 비밀번호를 확인하세요.")
    },
  },
});

export default users;
