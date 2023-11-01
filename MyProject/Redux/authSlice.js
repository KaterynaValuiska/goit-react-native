import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./authOperation";

const initialState = {
  userId: "",
  name: "",
  email: "",
  avatar: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    loginUser: {
      reducer: (state, action) => ({ ...state, ...action.payload }),
      prepare: (user) => ({
        payload: { ...user, isLoggedIn: true },
      }),
    },
    logout: () => initialState,
    authStateChange: (state, { payload }) => {
      state.auth = payload.stateChange;
    },
    updateUserProfile: (state, action) => action.payload,
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
export const { loginUser, logout, authStateChange, updateUserProfile } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
