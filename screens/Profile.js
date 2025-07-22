import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'blue'}}>
      <Text style={styles.header}>PROFILE</Text>
      <Pressable onPress={() => navigation.navigate("Settings")}>
        <Text style={styles.header}>SETTINGS</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 72,
  }
})