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
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function PostCard({ namePhoto, photo, location, id, spot }) {
  const navigation = useNavigation();
  return (
    <View style={styles.continer}>
      <View style={styles.continerPhoto}>
        <Image style={styles.photoImg} source={{ uri: photo }}></Image>
      </View>
      <Text style={styles.namePhoto}>{namePhoto}</Text>
      <View style={styles.continerCommentMain}>
        <View style={styles.continerComment}>
          <TouchableOpacity
            style={styles.comment}
            onPress={() => navigation.navigate("Comment", { id, photo })}
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
          <TouchableOpacity
            onPress={() => navigation.navigate("Map", { spot, namePhoto })}
          >
            <MaterialCommunityIcons
              name={"map-marker"}
              size={25}
              color="#E2E2E2"
            />
            <Text>{location}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {
    marginBottom: 32,
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
  photoImg: { width: 340, height: 240, borderRadius: 8 },
});
