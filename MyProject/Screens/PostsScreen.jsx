import { Button, StyleSheet, Text, View, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function PostsScreen() {
  return (
    <View style={styles.continer}>
      <View style={styles.continerHeader}>
        <Text style={styles.title}>Publications</Text>
        <MaterialCommunityIcons name={"export"} size={25} color="#aaa" />
      </View>
      <View style={styles.continerContent}></View>
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
  },
  continerHeader: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 44,
    gap: 80,
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
  },
  continerContent: {
    flex: 10,
  },
  continerFooter: {
    flex: 1,
    flexDirection: "row",
    borderTopColor: "#aaa",
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
});

export default PostsScreen;
