import { createSlice } from "@reduxjs/toolkit";
import * as USER_TYPES from "./type";

const initialState = {
  name: "phu",
  age: "26",
};

const userSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    [USER_TYPES.GET_USER]: (state, action) => {
      return state;
    },
  },
});

export const { reducer: userReducer } = userSlice;
