import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import { React } from 'react';


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

const header = {headerShown: true, title: "SpotSight", headerStyle: { backgroundColor: "#CC005C" }, headerTintColor: "#FFFFFF", headerTitleStyle: { fontWeight: "bold" }};

function MainTabs() {
  return (
    <Tabs.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tabs.Screen name="Home" component={HomeScreen}/>
      <Tabs.Screen name="Search" component={SearchScreen}/>
      <Tabs.Screen name="New Post" component={NewPostScreen}/>
      <Tabs.Screen name="Messages" component={MessagesScreen}/>
      <Tabs.Screen name="Profile" component={ProfileScreen} screenOptions={{headerShown: false}}/>
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
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='MainTabs' component={MainTabs} options={{headerShown: false}}/>
        <Stack.Screen name='Settings' component={SettingsScreen} options={header}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
