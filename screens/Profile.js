import { StatusBar } from 'expo-status-bar';
import {React} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
    const navigation = useNavigation();

    function ColorRectangleScreenProfile1() {
    return(
      <View style={styles.ColorRectangleProfile1}>
        <Image source={require('../ProfileIcons/SettingsIconProfile30x30.png')} 
          style={styles.SettingsIconProfile}
        />
      </View>
    );
}


function ColorRectangleScreenProfile2() {
  return(
    <View style={styles.ColorRectangleProfile2}>
      <View style={styles.row}>
        <Image source={require('../ProfileIcons/ProfileMainIcon.png')} 
              style={styles.ProfileMainIcon}
        />
        <Image source={require('../ProfileIcons/PhotoProfile.png')} 
        style={styles.PhotoProfile}
        />
              
        <View style={styles.column}>
          <Text style={styles.NickName}>Ayanami Rei</Text>
          <Text style={styles.UserName}>@ayanamilegend</Text>
        </View>
      </View>
    </View>
  );
}

function ColorElipseScreenProfile1() {
  return(
    <View style={styles.ColorElipseProfile1}>

    </View>
  );
}
function EditProfileProfile() {
  return(
    <TouchableOpacity
      onPress={() => navigation.navigate("EditProfileScreen")}
      style={styles.WhiteButtonProfile}
    >
      <View style={styles.row}>
        <Image source={require('../ProfileIcons/EditIconProfile.png')} 
        style={styles.IconsProfile}
        />
        <Text style={styles.OptionText}>
          Edit Profile
        </Text>
        <Image source={require('../ProfileIcons/ForwardIconProfile30.png')} 
        style={styles.ForwardIconProfile}
        />
        
      </View>
    </TouchableOpacity>
  );
}
function PinnedProfile() {
  return(
    <TouchableOpacity
      onPress={() => navigation.navigate("PinnedScreen")}
      style={styles.WhiteButtonProfile}
    >
    <View style={styles.row}>
      <Image source={require('../ProfileIcons/PinnedProfile.png')} 
      style={styles.IconsProfile}
      />
      <Text style={styles.OptionText}>
      Pinned
    </Text>
      <Image source={require('../ProfileIcons/ForwardIconProfile30.png')} 
      style={styles.ForwardIconProfile}
      />
      
    </View>
    

    </TouchableOpacity>

  );
}
function YourHiddenGemsProfile() {
  return(
    <TouchableOpacity
                onPress={() => navigation.navigate("YourHiddenGemsScreen")}
                style={styles.WhiteButtonProfile}
              >
    <View style={styles.row}>
      <Image source={require('../ProfileIcons/YourHiddenGemsProfile.png')} 
      style={styles.IconsProfile}
      />
      <Text style={styles.OptionText}>
      Your Hidden Gems
    </Text>
      <Image source={require('../ProfileIcons/ForwardIconProfile30.png')} 
      style={styles.ForwardIconProfile}
      />
      
    </View>
    

              </TouchableOpacity>

  );
}
function LanguageProfile() {
  return(
    <TouchableOpacity
                onPress={() => navigation.navigate("LanguageScreen")}
                style={styles.WhiteButtonProfile}
              >
    <View style={styles.row}>
      <Image source={require('../ProfileIcons/LanguageProfile.png')} 
      style={styles.IconsProfile}
      />
      <Text style={styles.OptionText}>
      Language
    </Text>
      <Image source={require('../ProfileIcons/ForwardIconProfile30.png')} 
      style={styles.ForwardIconProfile}
      />
      
    </View>
    

              </TouchableOpacity>

  );
}
function FriendsProfile() {
  return(
    <TouchableOpacity
                onPress={() => navigation.navigate("FriendsScreen")}
                style={styles.WhiteButtonProfile}
              >
    <View style={styles.row}>
      <Image source={require('../ProfileIcons/FriendsProfile.png')} 
      style={styles.IconsProfile}
      />
      <Text style={styles.OptionText}>
      Friends
    </Text>
      <Image source={require('../ProfileIcons/ForwardIconProfile30.png')} 
      style={styles.ForwardIconProfile}
      />
      
    </View>
    

              </TouchableOpacity>

  );
}
function FavoriteProfile() {
  return(
    <TouchableOpacity
                onPress={() => navigation.navigate("FavoriteScreen")}
                style={styles.WhiteButtonProfile}
              >
    <View style={styles.row}>
      <Image source={require('../ProfileIcons/FavoriteProfile.png')} 
      style={styles.IconsProfile}
      />
      <Text style={styles.OptionText}>
      Favorite Places
    </Text>
      <Image source={require('../ProfileIcons/ForwardIconProfile30.png')} 
      style={styles.ForwardIconProfile}
      />
      
    </View>
    

              </TouchableOpacity>

  );
}
function InformationProfile() {
  return(
    <TouchableOpacity
                onPress={() => navigation.navigate("InformationScreen")}
                style={styles.WhiteButtonProfile}
              >
    <View style={styles.row}>
      <Image source={require('../ProfileIcons/InformationProfile.png')} 
      style={styles.IconsProfile}
      />
      <Text style={styles.OptionText}>
      Information
    </Text>
      <Image source={require('../ProfileIcons/ForwardIconProfile30.png')} 
      style={styles.ForwardIconProfile}
      />
      
    </View>
    

              </TouchableOpacity>

  );
}
function WhiteRectangleProfile() {
  return(
    <View style={styles.WhiteRectangleProfile}>
    
    </View>

  );
}
return (
  
    <View style={styles.container}>
    
    <ColorElipseScreenProfile1/>
    <ColorRectangleScreenProfile2/>
    <ColorRectangleScreenProfile1/>
    <View style={styles.column}>
      <EditProfileProfile/>
      <PinnedProfile/>
      <YourHiddenGemsProfile/>
      <LanguageProfile/>
      <FriendsProfile/>
      <FavoriteProfile/>
      <InformationProfile/>
      

      
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
    height: '8.04%',
    backgroundColor: '#CC005C',
    alignSelf: 'center',
    top: 0,
    position: 'absolute'
  
  },
    ColorRectangleProfile2: {
    width: '100%',
    height: '23.06%',
    alignSelf:'center',
    backgroundColor: '#DD1155',
    top: 0,
    position: 'absolute'
  
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
    height: '60',
    backgroundColor: 'white',
    top: '27%',
    alignSelf:'center',
    
    borderRadius: 50,
    marginBottom: 1,
  },
  column: {
    flexDirection: 'column',
    height: '100%',
    width: '100%'

  },
  column1: {
    flexDirection: 'column',
    top: -380,

  },
  row: {
    flexDirection: 'row',
    

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
    flexDirection: 'row',
    height: 100,
    width: 100,
    borderRadius: 200,
    borderColor: 'white',
    borderWidth: 3,
    marginTop: '22%',
    marginLeft: 8,
    alignContent: 'Left'
  },
  NickName: {
    fontFamily: 'PassionOne', 
    fontSize: 30,
    marginTop: 100,
    color: 'white',
    marginLeft: 10

  },
  UserName: {
    fontFamily: 'Exo', 
    fontSize: 15,
    marginTop: -5,
    color: 'white',
    marginLeft: 10,

  },
  ForwardIconProfile:{
    marginTop: '4%',
    marginLeft: '78%',
    height: 30,
    width: 30

  },
  IconsProfile:{
    marginTop: '4%',
    marginLeft: '4%',
    height: 30,
    width: 30

  },
  OptionText:{
    fontFamily: 'Roboto',
    marginTop: '5%',
    marginLeft: '4%',
    color: 'black'

  },
  PhotoProfile: {
    height: 30,
    width: 30,
    top: 160,
    right: 25

  }

});

