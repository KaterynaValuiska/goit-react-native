import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function RegistrationScreen() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
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
        style={styles.input}
        placeholder="Login"
        type="text"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="email"
        type="email"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        type="password"
        placeholderTextColor="#aaa"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
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
        <Text style={styles.text}>Sign up</Text>
      </Pressable>
      <Text style={styles.textSignUp}>Do you have an account? Sign in</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 549,
    top: 263,
    borderColor: "red",
    borderWidth: 1,
    paddingTop: 100,
    backgroundColor: "white",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
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
    left: 320,
  },
  title: {
    textAlign: "center",
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

export default RegistrationScreen;
