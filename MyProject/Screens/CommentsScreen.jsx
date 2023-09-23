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
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function CommentsScreen() {
  const navigation = useNavigation();
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
          <View style={styles.continerPhoto}></View>
          <View></View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Comment..."
              placeholderTextColor="#aaa"
              //   value={password}
            />
            <MaterialCommunityIcons
              name={"arrow-up"}
              size={25}
              color={"white"}
              style={styles.iconArrow}
            />
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
});
export default CommentsScreen;
