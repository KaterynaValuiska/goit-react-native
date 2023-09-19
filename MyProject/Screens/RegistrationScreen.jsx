import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function RegistrationScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focus, setFocus] = useState(true);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const signUp = () => {
    console.debug("Welcome!");
    console.debug(`${name}, ${email}, ${password}`);
  };
  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ ...styles.container, top: focus ? 143 : 263 }}>
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
          style={!focus ? input : inputFocus}
          placeholder="Login"
          type="text"
          value={name}
          placeholderTextColor="#aaa"
          onChangeText={setName}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <TextInput
          style={!focus ? input : inputFocus}
          placeholder="email"
          type="email"
          value={email}
          placeholderTextColor="#aaa"
          onChangeText={setEmail}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <TextInput
          style={!focus ? input : inputFocus}
          placeholder="password"
          type="password"
          placeholderTextColor="#aaa"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          onFocus={onFocus}
          onBlur={onBlur}
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

        <Text style={styles.textSignUp}>Do you have an account? Sign in</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 375,
    height: 549,
    paddingTop: 100,
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
    left: 320,
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

export default RegistrationScreen;
