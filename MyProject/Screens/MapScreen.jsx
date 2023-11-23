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
  Dimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MapScreen() {
  const navigation = useNavigation();
  console.log(spot);
  const {
    params: { spot, namePhoto },
  } = useRoute();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.continer}>
        <View style={styles.continerHeader}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <MaterialCommunityIcons name={"keyboard-backspace"} size={25} />
          </TouchableOpacity>
          <Text style={styles.title}>Location</Text>
        </View>
        <View style={styles.wrapper}>
          <MapView
            style={styles.mapStyle}
            region={{
              ...spot,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
            mapType="standard"
            minZoomLevel={15}
            onMapReady={() => console.log("Map is ready")}
            onRegionChange={() => console.log("Region change")}
          >
            <Marker title={namePhoto} coordinate={spot} description="Hello" />
          </MapView>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
  },
  continerHeader: {
    flex: 1,
    flexDirection: "row",
    gap: 120,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    alignItems: "center",
    marginTop: 30,
    marginLeft: 16,

    width: "100%",
  },
  continerContent: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 32,
  },
  wrapper: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
