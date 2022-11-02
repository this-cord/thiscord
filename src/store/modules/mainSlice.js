import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: {
    name: "",
    chattingRoom: {
      roomId: "",
      roonName: "",
    },
  },
};

export const __addRoom = createAsyncThunk(
  "ADD_ROOM",
  async (payload, thunkAPI) => {
    console.log("dd", payload);
    try {
      const data = await axios.post(
        "http://44.201.230.211:8080/chat/room",
        payload.data
      );
      console.log("데이타", data);
      return thunkAPI.fuifliiedWithValue(data.data);
    } catch (e) {
      console.log("e다", e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __getRoomById = createAsyncThunk(
  "GET_ROOM_BY_ID",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await axios.get(
        `http://44.201.230.211:8080/data?${payload}`
      );

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateRoom = createAsyncThunk(
  "UPDATE_ROOM",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch(
        `http://44.201.230.211:8080/${payload.id}`,
        payload
      );
      return thunkAPI.fuifliiedWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectedWithValue(e);
    }
  }
);

export const __deleteRoom = createAsyncThunk(
  "DELETE_ROOM",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://44.201.230.211:8080/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectedWithValue(error.code);
    }
  }
);

export const mainSlice = createSlice({
  name: "room",
  initialState,
  reducers: {},
  extraReducers: {
    //ADD
    [__addRoom.pending]: (state) => {
      state.isLoading = true;
    },
    [__addRoom.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    },
    [__addRoom.rejected]: (state, action) => {
      state.isLoading = false;
      state.room = action.payload;
    },

    //GET
    [__getRoomById.pending]: (state) => {
      state.isLoading = true;
    },
    [__getRoomById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [__getRoomById.rejected]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },

    //Update

    [__updateRoom.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateRoom.fulfilled]: (state, action) => {
      const target = state.data.findIndex((room) => room.id === action.payload);
      state.data.splice(target, 1, action.payload);
    },
    [__updateRoom.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // delete

    [__deleteRoom.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteRoom.fulfilled]: (state, action) => {
      state.isLoading = false;
      const target = state.data.findIndex((room) => room.id === action.payload);
      state.data.splice(target, 1);
    },
    [__deleteRoom.rejected]: (state, action) => {
      state.isLoading = false;
      state.room = action.payload;
    },
  },
});

export const { addRoom } = mainSlice.actions;
export default mainSlice.reducer;
