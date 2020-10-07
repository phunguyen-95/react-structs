import { createSlice } from "@reduxjs/toolkit";
import * as POST_TYPE from "./type";

const initialState = {
  list: [],
  isLoading: false,
  error: undefined,
};

const userSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    [POST_TYPE.GET_POST]: (state, action) => {
      return { ...state, isLoading: true };
    },
    [POST_TYPE.GET_POST_SUCCESS]: (state, action) => {
      const { payload } = action;
      return { ...state, isLoading: false, list: payload };
    },
    [POST_TYPE.GET_POST_FAILED]: (state, action) => {
      const { payload } = action;
      return { ...state, isLoading: false, error: payload };
    },
  },
});

export const { reducer: userReducer } = userSlice;
