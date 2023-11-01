import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/authSlice";
import { logOut } from "../Redux/authOperation";

function PostsScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
    // navigation.navigate("Registration");
  };
  const { email, name } = useSelector((state) => state.auth);
  // const {
  //   params: { name, email },
  // } = useRoute();

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
        <View style={styles.userPhoto}></View>
        <Text style={styles.userData}>
          {name} {email}
          {"\n"}
          example@mail
        </Text>
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
  continerContent: {
    flex: 10,
    flexDirection: "row",
    gap: 8,
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
