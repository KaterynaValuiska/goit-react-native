import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RegistrationScreen from "../Screens/RegistrationScreen";
import LoginScreen from "../Screens/LoginScreen";
import PostsScreen from "../Screens/PostsScreen";
import CreatePostsScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import CommentsScreen from "../Screens/CommentsScreen";
import { useDispatch, useSelector } from "react-redux";
import { authStateChangeUser } from "../Redux/authOperation";
import MapScreen from "../Screens/MapScreen";
import { Button, StyleSheet, TouchableOpacity } from "react-native";
import { logout } from "../Redux/authSlice";
const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigator() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    authStateChangeUser();
  }, []);
  const logOut = () => {
    dispatch(logout());
  };
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: true,
      }}
      initialRouteName="App"
    >
      {!isLoggedIn ? (
        <>
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{
              title: "",
              headerTitleStyle: {
                display: "none",
              },
            }}
          />
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: "",
              headerTitleStyle: {
                display: "none",
              },
            }}
          />
        </>
      ) : (
        <>
          <MainStack.Screen
            name={"Tab"}
            component={TabNav}
            options={{
              title: "Publications",
              headerTitleStyle: {
                paddingLeft: 70,
                fontSize: 22,
              },
              headerRight: () => (
                <TouchableOpacity onPress={logOut}>
                  <MaterialCommunityIcons
                    name={"export"}
                    size={25}
                    color="#aaa"
                    style={styles.iconHeader}
                  />
                </TouchableOpacity>
              ),
            }}
          />
          {/* <MainStack.Screen name="Home" component={PostsScreen} /> */}
          <MainStack.Screen
            name="Comment"
            component={CommentsScreen}
            options={{
              title: "Comments",
              headerTitleStyle: {
                paddingLeft: 70,
              },
            }}
          />
          <MainStack.Screen
            name="Map"
            component={MapScreen}
            options={{
              title: "Location",
              headerTitleStyle: {
                paddingLeft: 70,
              },
            }}
          />
        </>
      )}
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
        tabBarActiveTintColor: "#e91e63",
      })}
      initialRouteName="Home"
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
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name={"plus-thick"}
              size={20}
              color="white"
            />
          ),
          tabBarIconStyle: {
            backgroundColor: "#FF6C00",
            borderRadius: 100,
            elevation: 3,
            width: 70,
            height: 35,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5,
            marginBottom: 5,
          },
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
  iconHeader: {
    paddingTop: 10,
    paddingRight: 16,
  },
});
