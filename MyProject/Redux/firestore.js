import { addDoc, collection } from "firebase/firestore";

import { db } from "../config";

export const addPost = async (uid, post) => {
  try {
    await addDoc(collection(db, "posts"), { ...post, uid });
    console.log(post);
  } catch (error) {
    throw new Error("DB Error");
  }
};
