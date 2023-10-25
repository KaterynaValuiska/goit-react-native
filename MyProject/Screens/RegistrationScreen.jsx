import { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import image from "../Images/PhotoBG.png";
import { useDispatch } from "react-redux";
import { register } from "../Redux/authOperation";

function RegistrationScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const signUp = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(register(data));
    console.debug("Welcome!");
    console.debug(data);
    navigation.navigate("Login", { data });
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
              top: nameFocus || emailFocus || passwordFocus ? 103 : 223,
            }}
          >
            <View style={styles.photoBlok}>
              <MaterialCommunityIcons
                name={"plus-circle-outline"}
                style={styles.buttonX}
                size={25}
                color="#FF6C00"
                onPress={toggleShowPassword}
              />
            </View>
            <Text style={styles.title}>Registration</Text>

            <TextInput
              style={!nameFocus ? input : inputFocus}
              placeholder="Login"
              type="text"
              name="name"
              placeholderTextColor="#aaa"
              onFocus={() => setNameFocus(true)}
              onBlur={() => setNameFocus(false)}
            />
            <TextInput
              style={!emailFocus ? input : inputFocus}
              placeholder="email"
              type="email"
              name="email"
              placeholderTextColor="#aaa"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <TextInput
              style={!passwordFocus ? input : inputFocus}
              placeholder="password"
              type="password"
              placeholderTextColor="#aaa"
              secureTextEntry={!showPassword}
              name="password"
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
              <Text style={styles.text}>Sign up</Text>
            </Pressable>
            <View style={styles.containerText}>
              <Text>Do you have an account? </Text>
              <Text
                style={styles.textSignUp}
                onPress={() =>
                  navigation.navigate("Login", {
                    email: form.elements.email.value,
                    password: form.elements.password.value,
                  })
                }
              >
                Sign in
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
    flex: 1,
    width: "100%",
    height: 549,
    paddingTop: 90,
    backgroundColor: "white",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  photoBlok: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: -60,
    left: "34%",
    borderRadius: 16,
  },
  buttonX: {
    left: 105,
    top: 80,
  },
  icon: {
    top: -35,
    left: 145,
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

export default RegistrationScreen;
