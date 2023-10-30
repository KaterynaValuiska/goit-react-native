import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../config";
import { async } from "@firebase/util";

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
        name: user.displayName,
        email: user.email,
      };
      console.log(userUpdateData);
      return userUpdateData;
    } catch (error) {
      throw new Error(error.message);
    }
  };
export const logIn =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      return credentials.user;
      // await signInWithEmailAndPassword(auth, email, password);
      // console.log(auth.currentUser);
      // return auth.currentUser;
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

// export const refreshUser = (onChange = () => {}) => {
//    onAuthStateChanged((user) => {
//     onChange(user);
//   });
// };
