import React from "react";
import "react-native-gesture-handler";
import { Text, StyleSheet, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RegistrationScreen from "../Screens/RegistrationScreen";
import LoginScreen from "../Screens/LoginScreen";
import PostsScreen from "../Screens/PostsScreen";
import CreatePostsScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="App"
    >
      <MainStack.Screen name={"Tab"} component={TabNav} />
      <MainStack.Screen name="Registration" component={RegistrationScreen} />
      <MainStack.Screen name="Login" component={LoginScreen} />
      <MainStack.Screen name="Home" component={PostsScreen} />
    </MainStack.Navigator>
  );
}

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          display: route.name === "Create" ? "none" : "flex",
        },
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={PostsScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name={"view-grid-outline"}
              size={25}
              color="#aaa"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          tabBarButton: () => (
            <Pressable style={styles.button}>
              <Text style={styles.text}>+</Text>
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name={"account-outline"}
              size={28}
              color="#aaa"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    elevation: 3,
    width: 70,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  text: {
    color: "white",
    fontSize: 35,
    top: -6,
  },
});
