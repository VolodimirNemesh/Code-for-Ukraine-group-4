import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, React } from "react";


export default function Login() {

  const navigation = useNavigation();
  const [style, setStyle] = useState(styles.textOut);

  function navigate(screenName) {
    navigation.navigate(screenName);
    navigation.reset({
      index: 0,
      routes: [{ name: screenName }]
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginWindow}>
        <Text style={styles.header}>LOGIN</Text>
        <TextInput textAlign={"center"} multiline={true} numberOfLines={5} style={styles.textInputText} placeholder="Username"></TextInput>
        <TextInput textAlign={"center"} multiline={true} style={styles.textInputText} placeholder="Password"></TextInput>
        <Pressable onPress={() => navigate("MainTabs")}>
          <Text style={styles.button}>LOG IN</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Register")} onHoverIn={() => setStyle(styles.textIn)} onHoverOut={() => setStyle(styles.textOut)}>
          <Text style={styles.textOut}>Don't have an account yet?</Text>
          <Text style={style}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: "#FFFFFF"
  },
  loginWindow: {
    borderRadius: 20,
    borderColor: "#000000",
    borderWidth: 3,
    backgroundColor: "#CC005C",
    height: "50%",
    width: "80%",
    justifyContent: "center",
  },
  header: {
    margin: 20,
    marginTop: -10,
    fontSize: 36,
    textAlign: "center",
    // fontFamily: "Passion One",
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  textInputText: {
    margin: 10,
    fontSize: 32,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    width: "85%",
    alignSelf: "center",
    color: "orange",
  },
  button: {
    margin: 20,
    fontSize: 32,
    alignSelf: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  textOut: {
    fontSize: 16,
    color: "white",
    alignSelf: "center",
  },
  textIn: {
    fontSize: 16,
    color: "white",
    alignSelf: "center",
    fontStyle: "italic",
  },
})