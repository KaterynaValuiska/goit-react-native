import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../config";
import { async } from "@firebase/util";
import {
  authStateChange,
  loginUser,
  logout,
  registerUser,
  updateUserProfile,
} from "./authSlice";

export const register =
  ({ email, password, name }) =>
  async (dispatch) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      await updateProfile(user, { displayName: name });
      const userUpdateData = {
        userId: user.uid,
        nameUser: user.displayName,
        email: user.email,
      };
      console.log(auth.currentUser);
      dispatch(registerUser(userUpdateData));
      // return userUpdateData;
      return auth.currentUser;
    } catch (error) {
      throw new Error(error.message);
    }
  };
export const logIn =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const currentUser = auth.currentUser;
      console.log(currentUser);
      const userUpdateData = {
        userId: currentUser.uid,
        name: currentUser.displayName,
        email: currentUser.email,
      };
      console.log(userUpdateData);
      dispatch(loginUser(userUpdateData));
      return userUpdateData;
      // await signInWithEmailAndPassword(auth, email, password);
      // console.log(auth.currentUser);
      // return auth.currentUser;
    } catch (error) {
      throw new Error(error.message);
    }
  };

export const authStateChangeUser = () => async (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userUpdateData = {
        userId: user.uid,
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
      };
      dispatch(authStateChange({ stateChange: true }));
      dispatch(updateUserProfile(userUpdateData));
    }
  });
};

export const logOut = async () => {
  try {
    await signOut(auth);
    dispatch(logout());
  } catch (error) {
    throw new Error(error.message);
  }
};

// export const refreshUser = (onChange = () => {}) => {
//    onAuthStateChanged((user) => {
//     onChange(user);
//   });
// };
