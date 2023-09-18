import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import image from "./Images/PhotoBG.png";

export default function App() {
  // const image = {
  //   uri: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
  // };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ image }}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <RegistrationScreen />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
