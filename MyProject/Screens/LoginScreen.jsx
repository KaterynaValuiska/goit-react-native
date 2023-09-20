import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function LoginScreen() {
  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const signUp = () => {
    console.debug("Welcome!");
    console.debug(`${email}, ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          onChangeText={setEmail}
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
          onChangeText={setPassword}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
        />
        <MaterialCommunityIcons
          name={showPassword ? "eye-off" : "eye"}
          size={24}
          color="#aaa"
          style={styles.icon}
          onPress={toggleShowPassword}
        />
        <Pressable style={styles.button} onPress={signUp}>
          <Text style={styles.text}>Sign in</Text>
        </Pressable>
        <Text style={styles.textSignUp}>Don't have an account? Sign up</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
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
