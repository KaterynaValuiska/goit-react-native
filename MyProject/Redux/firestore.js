import {
  addDoc,
  collection,
  setDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import { db } from "../config";

export const addPost = (userId, post) => async (dispatch) => {
  try {
    const postBD = await setDoc(doc(db, "collection", `${userId}`), post);
    // const postBD = await addDoc(collection(db, "posts"), {
    //   ...post,
    //   userId,
    // });
    console.log(userId);
    console.log(postBD);
  } catch (error) {
    throw new Error("DB Error");
  }
};

export const getPostsByUserId = async (uid) => {
  let posts = [];

  const q = query(collection(db, "posts"), where("userId", "==", uid));

  try {
    const res = await getDocs(q);
    res.forEach((doc) => posts.push({ id: doc.id, ...doc.data() }));

    return posts;
  } catch (error) {
    throw new Error("DB Error");
  }
};

export const addComment = async (pid, text) => {
  const time = new Date().toUTCString();

  try {
    const cc = await addDoc(collection(db, "comments"), {
      pid,
      text,
      createdAt: time,
    });
    console.log("created Comment");
    return cc;
  } catch (error) {
    throw new Error("DB Error");
  }
};

export const getCommentsByPostId = async (pid) => {
  let commentsDB = [];
  const q = query(collection(db, "comments"), where("pid", "==", pid));
  try {
    const res = await getDocs(q);
    res.forEach((doc) => commentsDB.push({ id: doc.id, ...doc.data() }));

    return commentsDB;
  } catch (error) {
    throw new Error("DB Error");
  }
};
