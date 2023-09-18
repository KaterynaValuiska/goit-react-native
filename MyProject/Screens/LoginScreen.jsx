import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <TextInput style={styles.input} placeholder="email" />
      <TextInput style={styles.input} placeholder="password" type="password" />
      <Pressable
        style={styles.button}
        onPress={() => console.log("Button with adjusted color pressed")}
      >
        <Text style={styles.text}>Sign in</Text>
      </Pressable>
      <Text style={styles.textSignUp}>Don't have an account? Sign гз</Text>
    </View>
  );
}
export default LoginScreen;
