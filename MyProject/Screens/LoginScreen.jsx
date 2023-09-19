import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function LoginScreen() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focus, setFocus] = useState(true);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={{ ...styles.container, top: focus ? 273 : 323 }}>
      <Text style={styles.title}>Sign in</Text>
      <TextInput
        style={styles.input}
        placeholder="email"
        type="email"
        placeholderTextColor="#aaa"
        autoComplete="email"
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        type="password"
        placeholderTextColor="#aaa"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
        autoComplete="password"
      />
      <MaterialCommunityIcons
        name={showPassword ? "eye-off" : "eye"}
        size={24}
        color="#aaa"
        style={styles.icon}
        onPress={toggleShowPassword}
      />
      <Pressable
        style={styles.button}
        onPress={() => console.log("Button with adjusted color pressed")}
      >
        <Text style={styles.text}>Sign in</Text>
      </Pressable>
      <Text style={styles.textSignUp}>Don't have an account? Sign up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 549,
    paddingTop: 32,
    backgroundColor: "white",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    alignItems: "center",
    margin: "auto",
  },

  input: {
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
export default LoginScreen;
