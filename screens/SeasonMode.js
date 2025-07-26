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
      <View style={styles.button_cont}>
      <TouchableOpacity onPress={() => setBg('#418DE3')} style={styles.WinterButtonProfile} >
        <Text style={styles.textIn}>Winter mode</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setBg('#FD4A9B')} style={styles.SpringButtonProfile} >
        <Text style={styles.textIn}>Spring mode</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setBg('#5EB229')} style={styles.SummerButtonProfile} >
        <Text style={styles.textIn}>Summer mode</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setBg('#EBA32A')} style={styles.AutumnButtonProfile} >
        <Text style={styles.textIn}>Autumn mode</Text>
        </TouchableOpacity>

        <Pressable onPress={() => navigation.goBack()} style={{ borderRadius: 20, borderWidth: 3, width: "80%", alignSelf: "center", backgroundColor: "#DD1155" }}><Text style={{ fontSize: 32, fontWeight: "semibold", alignSelf: "center" }}>Go back</Text></Pressable>

        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 72,
  },
  button_cont:{
      width:'70%',
      height:'70%',
      flexDirection: 'column',
      backgroundColor:'white',
      borderRadius:20,
      justifyContent:'space-around',

  },
    WinterButtonProfile: {
      width: '95%',
      height: '17%',
      backgroundColor: '#418DE3',
      borderWidth:3,
      marginLeft:'2%',
      borderRadius: 50,
      flex: 0,
      flexDirection: "row",
    },
    SpringButtonProfile: {
      width: '95%',
      height: '17%',
      backgroundColor: '#FD4A9B',
      borderWidth:3,
      marginLeft:'2%',
      borderRadius: 50,
      flex: 0,
      flexDirection: "row",
    },
    SummerButtonProfile: {
      width: '95%',
      height: '17%',
      backgroundColor: '#5EB229',
      borderWidth:3,
      marginLeft:'2%',
      borderRadius: 50,
      flex: 0,
      flexDirection: "row",
    },
    AutumnButtonProfile: {
      width: '95%',
      height: '17%',
      backgroundColor: '#EBA32A',
      borderWidth:3,
      marginLeft:'2%',
      borderRadius: 50,
      flex: 0,
      flexDirection: "row",
    },
    textIn: {
      fontSize: 20,
      fontWeight:'bold',
      color: "white",
      marginLeft:'27%',
      alignSelf: "center",
      fontStyle: "italic",
    },
})