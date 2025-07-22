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
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'blue'}}>
      <Pressable onPress={() => navigate("MainTabs")}>
        <Text style={styles.header}>LOG IN</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Register")}>
        <Text style={styles.header}>REGISTER</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 72,
  }
})