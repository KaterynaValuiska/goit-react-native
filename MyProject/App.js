import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import image from "./Images/PhotoBG.png";
import LoginScreen from "./Screens/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <LoginScreen />
        {/* <RegistrationScreen /> */}
        {/* <PostsScreen /> */}
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
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
