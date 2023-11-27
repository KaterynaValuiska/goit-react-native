import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import image from "../Images/PhotoBG.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getPostsByUserId } from "../Redux/firestore";
import { useSelector } from "react-redux";

function ProfileScreen() {
  const { nameUser, userId } = useSelector((state) => state.auth);
  const navigation = useNavigation();
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    async function fetchData() {
      const data = await getPostsByUserId(userId);
      setPosts(data);
      console.log("data", data);
    }
    fetchData();
  }, [userId]);
  return (
    <SafeAreaView style={styles.containerMain}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <View style={styles.photoBlok}></View>
          <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
            <MaterialCommunityIcons
              name={"export"}
              size={25}
              color="#aaa"
              style={styles.iconHeader}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{nameUser}</Text>
          {posts.length > 0 && (
            <ScrollView>
              {posts.map((post) => (
                <View key={post.id}>
                  <View style={styles.continerPhoto}>
                    <Image
                      style={styles.photoImg}
                      source={{ uri: post.photo }}
                    ></Image>
                  </View>
                  <Text style={styles.namePhoto}>{post.namePhoto}</Text>
                  <View style={styles.continerCommentMain}>
                    <View style={styles.continerComment}>
                      <TouchableOpacity
                        style={styles.comment}
                        onPress={() =>
                          navigation.navigate("Comment", {
                            id: post.id,
                            photo: post.photo,
                          })
                        }
                      >
                        <MaterialCommunityIcons
                          name={"comment"}
                          size={25}
                          color="#FF6C00"
                        />
                        <Text>0</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.comment}
                        onPress={() => setCount(count + 1)}
                      >
                        <MaterialCommunityIcons
                          name={"thumb-up-outline"}
                          size={25}
                          color="#FF6C00"
                        />
                        <Text>{count}</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      style={styles.mapMarkerName}
                      onPress={() =>
                        navigation.navigate("Map", {
                          spot: post.spot,
                          namePhoto: post.namePhoto,
                        })
                      }
                    >
                      <MaterialCommunityIcons
                        name={"map-marker"}
                        size={25}
                        color="#FF6C00"
                      />
                      <Text>{post.location}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    top: 147,
    width: "100%",
    height: 549,
    paddingTop: 40,
    backgroundColor: "white",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  photoBlok: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: -60,
    left: "34%",
    borderRadius: 16,
  },

  title: {
    fontSize: 30,
  },
  iconHeader: {
    left: 150,
    top: -20,
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
    marginTop: 25,
  },
  photoImg: { width: 340, height: 240, borderRadius: 8 },
  namePhoto: {
    marginTop: 8,
    marginBottom: 8,
  },
  continerCommentMain: {
    flexDirection: "row",
    gap: 140,
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
export default ProfileScreen;
