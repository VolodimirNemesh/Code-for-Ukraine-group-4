import { StatusBar } from 'expo-status-bar';
import {React} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation();

  function ColorRectangleScreenProfile2() {
    return(
      <View style={styles.ColorRectangleProfile2}>
        <Image source={require('../ProfileIcons/ProfileMainIcon.png')} style={styles.ProfileMainIcon}/>
        <View style={styles.column}>
          <Text style={styles.NickName}>Ayanami Rei</Text>
          <Text style={styles.UserName}>@ayanamilegend</Text>
        </View>
      </View>
    );
  }

  function ColorElipseScreenProfile1() {
    return <View style={styles.ColorElipseProfile1}></View>;
  }

  return (
    <View style={styles.container}>
      <ColorElipseScreenProfile1/>
      <ColorRectangleScreenProfile2/>
      <View style={styles.column}>
        <ProfileNavigate navigation={navigation} screen="EditProfileScreen" text="Edit Profile" icon={require('../ProfileIcons/EditIconProfile.png')}/>
        <ProfileNavigate navigation={navigation} screen="PinnedScreen" text="Pinned" icon={require('../ProfileIcons/PinnedProfile.png')}/>
        <ProfileNavigate navigation={navigation} screen="YourHiddenGemsScreen" text="Your Hidden Gems" icon={require('../ProfileIcons/YourHiddenGemsProfile.png')}/>
        <ProfileNavigate navigation={navigation} screen="LanguageScreen" text="Language" icon={require('../ProfileIcons/LanguageProfile.png')}/>
        <ProfileNavigate navigation={navigation} screen="FriendsScreen" text="Friends" icon={require('../ProfileIcons/FriendsProfile.png')}/>
        <ProfileNavigate navigation={navigation} screen="FavoriteScreen" text="Favorite Places" icon={require('../ProfileIcons/FavoriteProfile.png')}/>
        <ProfileNavigate navigation={navigation} screen="InformationScreen" text="Information" icon={require('../ProfileIcons/InformationProfile.png')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 72,
  },
  ColorRectangleProfile1: {
    width: '100%',
    height: '10%',
    backgroundColor: '#CC005C',
    alignSelf: 'center',
    top: 0,
    position: 'absolute'
  },
    ColorRectangleProfile2: {
    width: '100%',
    height: '23%',
    backgroundColor: '#DD1155',
    position: 'absolute',
    flexDirection: "row",
  },
  ColorElipseProfile1: {
    width: '10%',
    height: '100',
    backgroundColor: '#DD1155',
    marginTop: '31.1%',
    alignSelf:'center',
    position: 'absolute',
    borderRadius: 25,
    transform: [{ scaleX: 10 }],
  },
  WhiteButtonProfile: {
    width: '95%',
    height: '7%',
    backgroundColor: 'white',
    top: '27%',
    alignSelf:'center',
    borderRadius: 50,
    marginBottom: 1,
    flex: 0,
    flexDirection: "row",
  },
  column: {
    flexDirection: 'column',
    height: '100%',
    width: '100%'
  },
  column1: {
    flexDirection: 'column',
  },
  WhiteRectangleProfile: {
    backgroundColor: 'white',
    top: '30.5%',
    right: '82.5%',
    position: 'absolute',
    width: '15%',
    height: '38.5%'
  },
  SettingsIconProfile: {
    marginTop: '8%',
    marginLeft: '89%',
  },
  ProfileMainIcon: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 3,
    alignContent: 'Left',
    alignSelf: "center",
    marginLeft: "4%",
    marginRight: "3%",
  },
  NickName: {
    fontFamily: 'PassionOne', 
    fontSize: 30,
    color: 'white',
    marginTop: "13.5%",
  },
  UserName: {
    fontFamily: 'Exo', 
    fontSize: 15,
    color: 'white',
  },
  ForwardIconProfile:{
    height: 30,
    width: 30,
    position: "absolute",
    right: "4%",
    alignSelf: "center",
  },
  IconsProfile:{
    marginLeft: '3%',
    alignSelf: "center",
    height: 30,
    width: 30,

  },
  OptionText:{
    fontFamily: 'Roboto',
    marginLeft: '3%',
    color: 'black',
    alignSelf: "center",
  }
});