import { StatusBar } from 'expo-status-bar';
import {React} from 'react';
import { useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from "@react-navigation/native";
export default function Messages() {
  function Profile() {
    return(
      <View style={styles.row}>
        <Image source={require('../ProfileIcons/Doggie.png')} 
        style={styles.PhotoProfile}
        />
        <Text style={styles.OptionText}>
        Doggie
      </Text>
        
      </View>
  
    );
  }
  function Your_Message(props) {
    return(
      <View style={styles.left_message}>
      <View style={styles.row}>
      <View style={{flexDirection:'row',height: 45,width: props.width_,borderRadius:20,marginTop:20,justifyContent:'flex-end',alignContent: 'right',backgroundColor: 'pink',}}>
        <Text style={styles.MessageText}>
        {props.content}
      </Text>
      </View>
      <Image source={require('../ProfileIcons/ProfileMainIcon.png')} 
        style={styles.YourmessagePhoto}
        />
      </View>
      </View>
    );
  }
  function Others_Message(props) {
    return(
      <View style={styles.right_message}>
      <View style={styles.row}>
      <Image source={require('../ProfileIcons/Doggie.png')} 
        style={styles.OthersmessagePhoto}
        />
      <View style={{flexDirection:'row',height: 45,width: props.width_,borderRadius:20,marginTop:20,justifyContent:'flex-end',alignContent: 'right',backgroundColor: 'lightblue',}}>
        <Text style={styles.MessageText}>
        {props.content}
      </Text>
      </View>
      </View>
      </View>
    );
  }
  return (
    <View>
    <View style={styles.profile}>
      <Profile/>
    </View>
    <Your_Message content={"Hi, Mia! Are you free this weekend?!"} width_={230}/>
    <Others_Message content={"Hey, Liam! Yes, I think so. Why?"} width_={205}/>
    <Your_Message content={"Want to meet up on Sunday?"} width_={181}/>
    <Others_Message content={"Sure! What time?"} width_={120}/>
    <Your_Message content={"Maybe around 2 p.m.?"} width_={149}/>
    <Others_Message content={"Sounds good. Where?"} width_={149}/>
    <Your_Message content={"Lets go to the new café downtown."} width_={220}/>
    <Others_Message content={"Great idea! See you there."} width_={175}/>
    <Your_Message content={"Awesome! Looking forward to it"} width_={203}/>
    <View style={styles.typer}>
    <Text style={styles.TyperText}>
      Type here...
    </Text>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    fontSize: 72,
  },
  profile:{
    flexDirection: 'row',
    height: 100,
    width: 428,
    borderRadius:20,
    justifyContent: 'center',
    alignContent: 'Left',
    backgroundColor: 'pink',
  },
  PhotoProfile: {
    height: 75,
    width: 75,
    top: 15,
    right: '43%',
    borderRadius:50,

  },
  YourmessagePhoto:{
    height: 30,
    width: 30,
    top: 13,
    marginTop:16,
    marginLeft:12,
    borderRadius:50,
  },
  OthersmessagePhoto:{
    height: 30,
    width: 30,
    top: 13,
    marginTop:16,
    marginLeft:12,
    marginRight:12,
    borderRadius:50,
  },
  OptionText:{
    fontFamily: 'Roboto',
    marginTop: '15%',
    marginRight: '15%',
    color: 'white',
    fontSize: 28

  },
  MessageText:{
    fontFamily: 'Roboto',
    marginTop: 14,
    marginRight: 12,
    color: 'white',
    fontSize: 14

  },
  row: {
    flexDirection: 'row',
    

  },
  message:{
    flexDirection:'row',
    height: 45,
    width: 150,
    borderRadius:20,
    marginTop:20,
    justifyContent:'flex-end',
    alignContent: 'right',
    backgroundColor: 'pink',
  },
  typer:{
    height: 45,
    width: 370,
    borderRadius:20,
    marginLeft:30,
    marginTop:15,
    borderColor: 'black',
    borderWidth: '2',
    justifyContent:'flex-start',
    alignContent: 'left',
    backgroundColor: '#DEDEDE',
  },
  TyperText:{
    fontFamily: 'Inter-V',
    marginTop: 12,
    marginLeft: 12,
    color: 'black',
    fontSize: 14

  },
  left_message: {
    alignItems: 'flex-end',
    marginRight:15
  },
  right_message: {
    alignItems: 'flex-start',
    marginRight:15
  },
})  