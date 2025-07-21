import { View, Text, StyleSheet } from "react-native";

export default function NewPost() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'blue'}}>
      <Text style={styles.header}>NEW POST</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 72,
  }
})