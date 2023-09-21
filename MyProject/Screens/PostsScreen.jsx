import { SafeAreaView, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function PostsScreen() {
  const navigation = useNavigation();
  const {
    params: { name, email },
  } = useRoute();

  return (
    <SafeAreaView style={styles.continer}>
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
        <Text style={styles.userData}>
          {name}
          {"\n"}
          {email}
        </Text>
      </View>
      <View style={styles.continerFooter}>
        <MaterialCommunityIcons
          name={"view-grid-outline"}
          size={25}
          color="#aaa"
        />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Create")}
        >
          <Text style={styles.text}>+</Text>
        </Pressable>
        <MaterialCommunityIcons
          name={"account-outline"}
          size={30}
          color="#aaa"
        />
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
    paddingTop: 10,
  },
});

export default PostsScreen;
