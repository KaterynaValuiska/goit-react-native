import { Text, View, StyleSheet } from "react-native";
export default function CommentItem({ text, createdAt }) {
  return (
    <View style={styles.continerComment}>
      <Text style={styles.textComment}>{text}</Text>
      <Text style={styles.emailComment}>{createdAt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  continerComment: {
    width: 299,
    height: 103,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 6,
    marginTop: 24,
  },
  textComment: {
    textAlign: "center",
    fontSize: 18,
  },
  emailComment: {
    fontSize: 12,
    color: "#BDBDBD",
    marginTop: 50,
    marginLeft: 90,
  },
});
