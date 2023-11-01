import { createSlice } from "@reduxjs/toolkit";
// import { register, logIn, logOut, refreshUser } from "./authOperation";

const initialState = {
  userId: "iii",
  nameUser: "Test",
  email: "example@mail",
  avatar: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    // register: (state, action) => ({ ...state, ...action.payload }),
    registerUser: {
      reducer: (state, action) => ({ ...state, ...action.payload }),
      prepare: (user) => ({
        payload: { ...user },
      }),
    },
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
  //   register(state, action) {
  //     state.user = action.payload.user;
  //   },
  // },
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
export const {
  loginUser,
  logout,
  authStateChange,
  updateUserProfile,
  registerUser,
} = authSlice.actions;
export const authReducer = authSlice.reducer;
