import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  updateDoc,
  doc,
  collection,
  getDocs,
  query,
  where,
  Timestamp,
  addDoc,
} from "firebase/firestore";
import { db } from "../config";

function CommentsScreen() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const navigation = useNavigation();
  const {
    params: { id, photo },
  } = useRoute();

  const publishComents = async () => {
    console.log("text", text);
    // setComments(comments.push(text));
    // console.log("comment", comments);
    // updateFirestore("posts", id, text);
    const com = await addComment(id, text);
    console.log("com", com);
    setText("");
  };

  useEffect(() => {
    console.log("useEffect");
    async function fetchData() {
      const data = await getCommentsByPostId(id);
      console.log("data", data);
      setComments(data);
      console.log("comments", comments);
    }
    fetchData();
  }, []);

  const getCommentsByPostId = async (pid) => {
    let commentsDB = [];

    const q = query(collection(db, "comments"), where("pid", "===", pid));
    try {
      const res = await getDocs(q);
      res.forEach((doc) => commentsDB.push({ id: doc.id, ...doc.data() }));
      console.log("pos", commentsDB);
      return commentsDB;
    } catch (error) {
      throw new Error("DB Error");
    }
  };

  // const updateFirestore = async (collectionName, docId, comText) => {
  //   try {
  //     const ref = doc(db, collectionName, docId);

  //     await updateDoc(ref, {
  //       comments: comText,
  //     });
  //     console.log("document updated");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const addComment = async (pid, text) => {
    try {
      await addDoc(collection(db, "comments"), {
        pid,
        text,
        createdAt: Timestamp.now(),
      });
      console.log("created Comment");
    } catch (error) {
      throw new Error("DB Error");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.continer}>
        <View style={styles.continerHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name={"keyboard-backspace"} size={25} />
          </TouchableOpacity>
          <Text style={styles.title}>Comments</Text>
        </View>
        <View style={styles.continerContent}>
          <View style={styles.continerPhoto}>
            <Image style={styles.photoImg} source={{ uri: photo }}></Image>
          </View>
          <ScrollView>
            {comments.length > 0 && (
              <>
                {comments.map((post) => (
                  <View key={post.id} style={styles.continerComment}>
                    <Text style={styles.emailComment}>{post.createdAt}</Text>
                    <Text style={styles.textComment}>{post.comments}</Text>
                  </View>
                ))}
              </>
            )}
          </ScrollView>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Comment..."
              placeholderTextColor="#aaa"
              value={text}
              onChangeText={setText}
            />
            <TouchableOpacity onPress={publishComents}>
              <MaterialCommunityIcons
                name={"arrow-up"}
                size={25}
                color={"white"}
                style={styles.iconArrow}
                onPress={publishComents}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 22,
  },
  continerHeader: {
    flex: 1,
    flexDirection: "row",
    gap: 90,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    alignItems: "center",
    marginTop: 30,
    marginLeft: 16,
  },
  continerContent: {
    flex: 15,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 32,
  },
  continerPhoto: {
    width: 343,
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    alignItems: "center",
    justifyContent: "center",
  },
  photoImg: { width: 340, height: 240, borderRadius: 8 },

  input: {
    marginBottom: 0,
    marginTop: 16,
    borderWidth: 1,
    padding: 16,
    width: 343,
    height: 50,
    borderColor: "#E8E8E8",
    borderRadius: 50,
    color: "black",
    backgroundColor: "#F6F6F6",
  },
  iconArrow: {
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
    elevation: 3,
    paddingLeft: 4,
    paddingTop: 2,
    top: -40,
    left: 300,
  },
  continerComment: {
    width: 299,
    height: 103,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 6,
    marginTop: 24,
  },
  textComment: {
    textAlign: "center",
    fontSize: 18,
  },
  emailComment: {
    fontSize: 12,
    color: "#BDBDBD",
  },
});
export default CommentsScreen;
