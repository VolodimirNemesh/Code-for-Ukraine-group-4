import { StatusBar } from 'expo-status-bar';
import {React} from 'react';
import { useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from "@react-navigation/native";


export default function SeasonMode() {
  const [bg, setBg] = useState('#FD4A9B');

  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around',backgroundColor:bg}}>
      <Text style={styles.header}></Text>
      <TouchableOpacity style={styles.WhiteButtonProfile} >
        <Text style={styles.textIn}>Autumn mode</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 72,
  },
    WhiteButtonProfile: {
      width: '67%',
      height: '7%',
      backgroundColor: '#FD4A9B',
      borderWidth:3,
      
      alignSelf:'center',
      borderRadius: 50,
      marginBottom: 1,
      flex: 0,
      flexDirection: "row",
    },
    textIn: {
      fontSize: 20,
      fontWeight:'bold',
      color: "white",
      marginLeft:'25%',
      alignSelf: "center",
      fontStyle: "italic",
    },
})