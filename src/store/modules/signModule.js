import { createSlice } from "@reduxjs/toolkit";
import { __loginUser, __logoutUser, __signUser } from "./signThunk";

const initialState = {
  user: [{}],
  isLoading: false,
  isLogin: false,
};

export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginState: (state) => {
      state.isLogin = true;
    },
    logoutState: (state) => {
      state.isLogin = false;
    },
  },
  extraReducers: {
    [__signUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__signUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      alert(
        `${action.meta.arg.name}님 회원가입을 축하합니다. 로그인 해주세요.`
      );
    },
    [__signUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.message = "데이터를 불러오지 못했습니다.";
    },
    [__loginUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLogin = true;
    },
    [__loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isLogin = false;
      alert("아이디와 비밀번호를 확인하세요.");
    },
    [__logoutUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLogin = false;
    },
  },
});

export default users;
