import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import image from "./Images/PhotoBG.png";
import LoginScreen from "./Screens/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";

const MainStack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <View style={styles.container}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          >
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
            />
            <MainStack.Screen name="Login" component={LoginScreen} />
            <MainStack.Screen name="Home" component={PostsScreen} />
          </ImageBackground>
          <StatusBar style="auto" />
        </View>
      </MainStack.Navigator>
    </NavigationContainer>
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
