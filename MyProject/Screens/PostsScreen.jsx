import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/authSlice";
import { logOut } from "../Redux/authOperation";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

function PostsScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const { email, nameUser } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   const data = getAllPosts();
  //   setPosts(data);
  //   console.log(posts);
  // }, []);

  const getAllPosts = async () => {
    let postsDB = [];
    try {
      const res = await getDocs(collection(db, "posts"));
      res.forEach((doc) => console.log(`${doc.id} =>`, doc.data()));

      console.log(postsDB);
      return postsDB;
    } catch (error) {
      throw new Error("DB Error");
    }
  };
  const logOut = () => {
    dispatch(logout());
  };

  return (
    <SafeAreaView style={styles.continer}>
      <View style={styles.continerHeader}>
        <Text style={styles.title}>Publications</Text>
        <TouchableOpacity onPress={logOut}>
          <MaterialCommunityIcons
            name={"export"}
            size={25}
            color="#aaa"
            style={styles.iconHeader}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.continerContent}>
        <View style={styles.continerUser}>
          <View style={styles.userPhoto}></View>
          <Text style={styles.userData}>
            {nameUser}
            {"\n"}
            {email}
          </Text>
        </View>

        {posts.length > 0 && (
          <>
            <View style={styles.continerPhoto}>
              <Image></Image>
            </View>
            <Text style={styles.namePhoto}>Name photo</Text>
            <View style={styles.continerCommentMain}>
              <View style={styles.continerComment}>
                <TouchableOpacity
                  style={styles.comment}
                  onPress={() => navigation.navigate("Comment")}
                >
                  <MaterialCommunityIcons
                    name={"comment"}
                    size={25}
                    color="#E2E2E2"
                  />
                  <Text>0</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.mapMarkerName}>
                <MaterialCommunityIcons
                  name={"map-marker"}
                  size={25}
                  color="#E2E2E2"
                />
                <Text>Ukrain</Text>
              </View>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 22,
    paddingStart: 120,
    paddingTop: 10,
  },
  continerHeader: {
    flex: 1,
    flexDirection: "row",
    gap: 90,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    alignItems: "center",
    paddingTop: 12,
  },
  continerUser: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 32,
  },
  continerContent: {
    flex: 10,
  },
  userPhoto: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 12,
    borderWidth: 1,
    marginLeft: 16,
    marginTop: 32,
  },
  userData: {
    marginTop: 48,
  },
  iconHeader: {
    paddingTop: 10,
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
    marginLeft: 16,
  },
  namePhoto: {
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
  },
  continerCommentMain: {
    flexDirection: "row",
    gap: 40,
    marginLeft: 16,
  },
  continerComment: {
    flexDirection: "row",
    gap: 24,
  },
  comment: {
    flexDirection: "row",
    gap: 6,
  },
  mapMarkerName: {
    flexDirection: "row",
    gap: 4,
  },
});

export default PostsScreen;
