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
        tabBarIcon: ({ focused, color, size }) => {
          let icon = require("./navigationIcons/Question.png");;

          if (route.name === "Home") {
            icon = require("./navigationIcons/Home.png");
          } else if (route.name === "Search") {
            icon = require("./navigationIcons/Loop.png");
          } else if (route.name === "New Post") {
            icon = require("./navigationIcons/AddPost.png");;
          } else if (route.name === "Messages") {
            icon = require("./navigationIcons/Messages.png");;
          } else if (route.name === "Profile") {
            icon = require("./navigationIcons/Profile.png");;
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
      <Tabs.Screen name="SeasonMode" component={SeasonModeScreen}/>
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
        <Stack.Screen name="Settings" component={SettingsScreen}/>
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