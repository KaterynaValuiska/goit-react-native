import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  StatusBar,
} from "react-native";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import image from "../Images/PhotoBG.png";
function LoginScreen() {
  const navigation = useNavigation();
  const {
    params: { name, email, password },
  } = useRoute();
  // const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  // const [password, setPassword] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const signUp = () => {
    console.debug("Welcome!");
    console.debug(`${email}, ${password}`);
    navigation.navigate("Home", {
      name: name,
      email: email,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.containerMain}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        >
          <View
            style={{
              ...styles.container,
              top: emailFocus || passwordFocus ? 273 : 323,
            }}
          >
            <Text style={styles.title}>Sign in</Text>
            <TextInput
              style={!emailFocus ? input : inputFocus}
              placeholder="email"
              type="email"
              value={email}
              placeholderTextColor="#aaa"
              // onChangeText={email}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <TextInput
              style={!passwordFocus ? input : inputFocus}
              placeholder="password"
              type="password"
              placeholderTextColor="#aaa"
              secureTextEntry={!showPassword}
              value={password}
              // onChangeText={password}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            <MaterialCommunityIcons
              name={!showPassword ? "eye-off" : "eye"}
              size={24}
              color="#aaa"
              style={styles.icon}
              onPress={toggleShowPassword}
            />
            <Pressable style={styles.button} onPress={signUp}>
              <Text style={styles.text}>Sign in</Text>
            </Pressable>
            <View style={styles.containerText}>
              <Text>Don't have an account?</Text>
              <Text
                style={styles.textSignUp}
                onPress={() => navigation.navigate("Registration")}
              >
                Sign up
              </Text>
            </View>
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    width: "100%",
    height: 549,
    paddingTop: 32,
    backgroundColor: "white",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    alignItems: "center",
    margin: "auto",
  },

  icon: {
    top: -35,
    left: 150,
  },
  title: {
    textAlign: "center",
    color: "#212121",
    fontSize: 30,
  },
  button: {
    marginTop: 43,
    marginRight: 16,
    marginLeft: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    width: 343,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  text: {
    color: "white",
  },
  textSignUp: {
    textDecorationLine: "underline",
  },
  containerText: {
    flex: 1,
    flexDirection: "row",
    gap: 4,
    textAlign: "center",
    marginTop: 16,
    marginBottom: 30,
  },
});

const input = {
  marginRight: 16,
  marginLeft: 16,
  marginBottom: 0,
  marginTop: 16,
  borderWidth: 1,
  padding: 16,
  width: 343,
  height: 50,
  borderColor: "#E8E8E8",
  borderRadius: 12,
  color: "black",
  backgroundColor: "#F6F6F6",
};

const inputFocus = {
  marginRight: 16,
  marginLeft: 16,
  marginBottom: 0,
  marginTop: 16,
  borderWidth: 1,
  padding: 16,
  width: 343,
  height: 50,
  borderColor: "#FF6C00",
  borderRadius: 12,
  color: "black",
  backgroundColor: "#ffffff",
};

export default LoginScreen;
