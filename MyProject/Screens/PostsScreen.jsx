import { Button, StyleSheet, Text, View, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function PostsScreen() {
  return (
    <View style={styles.continer}>
      <View style={styles.continerHeader}>
        <Text style={styles.title}>Publications</Text>
        <MaterialCommunityIcons
          name={"export"}
          size={25}
          color="#aaa"
          style={styles.iconHeader}
        />
      </View>
      <View style={styles.continerContent}>
        <View style={styles.userPhoto}></View>
        <Text style={styles.userData}>User name{"\n"}example@mail</Text>
      </View>
      <View style={styles.continerFooter}>
        <MaterialCommunityIcons
          name={"view-grid-outline"}
          size={25}
          color="#aaa"
        />
        <Pressable style={styles.button} onPress={() => console.debug("+")}>
          <Text style={styles.text}>+</Text>
        </Pressable>
        <MaterialCommunityIcons
          name={"account-outline"}
          size={30}
          color="#aaa"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 22,
    paddingStart: 150,
    paddingTop: 20,
  },
  continerHeader: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 44,
    gap: 80,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  continerContent: {
    flex: 10,
    flexDirection: "row",
    gap: 8,
  },
  continerFooter: {
    flex: 1,
    flexDirection: "row",
    borderTopColor: "#E8E8E8",
    borderTopWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 31,
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    elevation: 3,
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 35,
    top: -4,
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
    paddingTop: 20,
  },
});

export default PostsScreen;
