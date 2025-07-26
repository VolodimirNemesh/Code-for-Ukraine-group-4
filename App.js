import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useFonts } from 'expo-font';

import { Dimensions, Pressable, Image, StyleSheet } from 'react-native';


import SeasonModeScreen from "./screens/SeasonMode.js";
import LoginScreen from "./screens/Login.js";
import RegisterScreen from "./screens/Register.js";
import HomeScreen from "./screens/Home.js";
import SearchScreen from "./screens/Search.js";
import NewPostScreen from "./screens/NewPost.js";
import MessagesScreen from "./screens/Messages.js";
import DMScreen from "./screens/DM.js";
import ProfileScreen from "./screens/Profile.js";
import SettingsScreen from "./screens/Settings.js";


const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const bell = {
  headerRight: () => (
    <Image source={require("./navigationIcons/Bell.png")} style={styles.headerIcon}/>
  ),
}

function MainTabs() {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarLabel: route.name,
        headerShown: true,
        title: "SpotSight",
        headerStyle: { backgroundColor: "#CC005C"},
        headerTintColor: "#FFFFFF",
        headerTitleStyle: { fontFamily: "PassionOne", fontSize: 28 },
        tabBarIcon: ({ focused }) => {
          let icon = require("./navigationIcons/Question.png");;

          if (route.name === "Home") {
            focused ? icon = require("./navigationIcons/HomeB.png") : icon = require("./navigationIcons/Home.png")
          } else if (route.name === "Search") {
            focused ? icon = require("./navigationIcons/LoopB.png") : icon = require("./navigationIcons/Loop.png")
          } else if (route.name === "New Post") {
            focused ? icon = require("./navigationIcons/AddPostB.png") : icon = require("./navigationIcons/AddPost.png")
          } else if (route.name === "Messages") {
            focused ? icon = require("./navigationIcons/MessagesB.png") : icon = require("./navigationIcons/Messages.png")
          } else if (route.name === "Profile") {
            focused ? icon = require("./navigationIcons/ProfileB.png") : icon = require("./navigationIcons/Profile.png")
          }

          return <Image source={icon} style={styles.icon}/>;
        },
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarStyle: { backgroundColor: "#DD1155" }
      })}>
      <Tabs.Screen name="Home" component={HomeScreen} options={bell}/>
      <Tabs.Screen name="Search" component={SearchScreen} options={bell}/>
      <Tabs.Screen name="New Post" component={NewPostScreen} options={bell}/>
      <Tabs.Screen name="Messages" component={MessagesScreen}/>
      <Tabs.Screen name="Profile" component={ProfileScreen} options={{
        headerRight: () => (
          <Pressable onPress={() => navigation.navigate("Settings")}>
            <Image source={require("./navigationIcons/Settings.png")} style={styles.headerIcon}/>
          </Pressable>
  )}}/>
    </Tabs.Navigator>
  )
}

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'PassionOne': require('./Fonts/PassionOne-Regular.ttf'),
    'Inter': require('./Fonts/Inter-V.ttf'),
    'Exo': require('./Fonts/Exo-V.ttf'),
    'JosefinSans': require('./Fonts/JosefinSans-V.ttf'),
    'Sans': require('./Fonts/OpenSans-V.ttf'),
    'Roboto': require('./Fonts/Roboto.ttf')
  })
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="MainTabs" component={MainTabs}/>
        <Stack.Screen name="Settings" component={SettingsScreen} options={{
          headerShown: true,
          title: "SpotSight",
          headerStyle: { backgroundColor: "#CC005C"},
          headerTintColor: "#FFFFFF",
          headerTitleStyle: { fontFamily: "PassionOne", fontSize: 28 },
          }}/>
        <Stack.Screen name="DM" component={DMScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
  },
  headerIcon: {
    marginRight: Dimensions.get("window").width * 0.03,
    height: 30,
    width: 30,
  }
})