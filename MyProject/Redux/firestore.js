import { addDoc, collection, setDoc, doc } from "firebase/firestore";

import { db } from "../config";

export const addPost = async (userId, post) => {
  try {
    // const postBD = await setDoc(doc(db, "collection", `${userId}`), post);
    const postBD = await addDoc(collection(db, "posts"), {
      ...post,
      userId,
    });
    console.log(postBD);
  } catch (error) {
    throw new Error("DB Error");
  }
};
