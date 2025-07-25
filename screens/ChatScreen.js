import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer, useNavigation, useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'magenta'}}>
      <Text style={styles.header}>HOME</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 72,
  }
})