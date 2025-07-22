import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
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
        <Text style={styles.header}>REGISTER</Text>
      </Pressable>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.header}>LOGIN</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 72,
  }
})