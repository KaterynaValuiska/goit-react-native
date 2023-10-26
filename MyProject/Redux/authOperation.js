import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../config";
import { async } from "@firebase/util";

export const register = async ({ email, password, name }) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(res.user, { name });
    console.log(auth.currentUser);
    return auth.currentUser;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const logIn = async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return auth.currentUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    return auth.currentUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const refreshUser = async (onChange = () => {}) => {
  onAuthStateChanged((user) => {
    onChange(user);
  });
};
