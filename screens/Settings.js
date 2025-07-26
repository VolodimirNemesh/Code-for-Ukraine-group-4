
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";

function SettingsBox(props) {
  // props: navigation, screen, icon, text
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate(props.screen)} style={styles.field}>
      <Image source={props.icon} style={styles.icon}/>
      <Text style={styles.text}>{props.text}</Text>
      <Image source={require('../ProfileIcons/ForwardIconProfile30.png')} style={styles.forwardIcon}/>
    </TouchableOpacity>
    );
}

function BackBox(props) {
  // props: navigation, screen, text
  return (
    <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.backField}>
      <Text style={styles.backText}>{props.text}</Text>
    </TouchableOpacity>
    );
}

export default function Settings() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: "#D9D9D9"}}>
      <View style={styles.containers}>
        <SettingsBox navigation={navigation} icon={require("../settingsIcons/Bell.png")} text="Notifications" screen="Notifications"/>
        <SettingsBox navigation={navigation} icon={require("../settingsIcons/Blocked.png")} text="Blocked users" screen="Blocked users"/>
        <SettingsBox navigation={navigation} icon={require("../settingsIcons/Time.png")} text="Time manager" screen="Time manager"/>
        <SettingsBox navigation={navigation} icon={require("../settingsIcons/Themes.png")} text="Themes" screen="Themes"/>
        <SettingsBox navigation={navigation} icon={require("../settingsIcons/Comments.png")} text="Comments" screen="Comments"/>
        <SettingsBox navigation={navigation} icon={require("../settingsIcons/Bookmarks.png")} text="Saved" screen="Saved"/>
      </View>

      <View style={styles.containers}>
        <SettingsBox navigation={navigation} icon={require("../settingsIcons/S&P.png")} text="Safety and Permissions" screen="Safety and Permissions"/>
        <SettingsBox navigation={navigation} icon={require("../settingsIcons/Accounts.png")} text="Accounts" screen="Accounts"/>
        <SettingsBox navigation={navigation} icon={require("../settingsIcons/Logout.png")} text="Log out" screen="Login"/>
        <SettingsBox navigation={navigation} icon={require("../settingsIcons/TechSupport.png")} text="Tech Support" screen="Tech Support"/>
        <SettingsBox navigation={navigation} icon={require("../settingsIcons/Information.png")} text="Rules and Policy" screen="Rules and Policy"/>
      </View>

      <BackBox navigation={navigation} text="Go Back"/>

    </View>
  );
}

const window = Dimensions.get("window");

const styles = StyleSheet.create({
  field: {
    width: '95%',
    height: window.height * 0.05,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 50,
    flex: 0,
    flexDirection: "row",
    margin: window.height * 0.003
  },
  backField: {
    width: '95%',
    height: window.height * 0.05,
    backgroundColor: "#CC005C",
    alignSelf: 'center',
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 3,
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  backText: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  forwardIcon: {
    height: 30,
    width: 30,
    position: "absolute",
    right: "4%",
    alignSelf: "center",
  },
  text: {
    fontSize: 20,
    color: "#000000",
    alignSelf: "center",
    marginLeft: window.width * 0.02,
  },
  icon: {
    height: window.height * 0.03,
    width: window.height * 0.03,
    marginLeft: window.width * 0.03,
    alignSelf: "center",
  },
  containers: {
    marginTop: window.height * 0.05,
    marginBottom: window.height * 0.05,
  }
})