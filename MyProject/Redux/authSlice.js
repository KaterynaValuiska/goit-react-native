import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./authOperation";

const initialState = {
  user: { name: null, email: null, password: null },
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    loginUser: {
      reducer: (state, action) => ({ ...state.user, ...action.payload }),
      prepare: (user) => ({
        payload: { ...user, isLoggedIn: true },
      }),
    },
  },
  // extraReducers: {
  //   [register.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.isLoggedIn = true;
  //   },
  //   [register.rejected]() {
  //     alert("Check the entered data");
  //   },
  //   [logIn.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.isLoggedIn = true;
  //   },
  //   [logIn.rejected]() {
  //     alert("Check the entered data");
  //   },
  //   [logOut.fulfilled](state) {
  //     state.user = { name: null, email: null };
  //     state.isLoggedIn = false;
  //   },

  //   // [refreshUser.pending](state) {
  //   //   state.isRefreshing = true;
  //   // },
  //   // [refreshUser.fulfilled](state, action) {
  //   //   state.user = action.payload;
  //   //   state.isLoggedIn = true;
  //   //   state.isRefreshing = false;
  //   // },
  //   // [refreshUser.rejected](state) {
  //   //   state.isRefreshing = false;
  //   // },
  // },
});
export const { loginUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
