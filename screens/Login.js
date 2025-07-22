import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {

  const navigation = useNavigation();

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
        <Text style={styles.header}></Text>
        <Pressable onPress={() => navigate("MainTabs")}>
          <Text style={styles.header}>LOG IN</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.header}>REGISTER</Text>
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
    backgroundColor: "#CC005C",
    height: "50%",
    width: "80%"
  },
  header: {
    fontSize: 36,
  }
})