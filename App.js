import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


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

function MainTabs() {
  return (
    <Tabs.Navigator initialRouteName="Home">
      <Tabs.Screen name="Home" component={HomeScreen}/>
      <Tabs.Screen name="Search" component={SearchScreen}/>
      <Tabs.Screen name="New Post" component={NewPostScreen}/>
      <Tabs.Screen name="Messages" component={MessagesScreen}/>
      <Tabs.Screen name="Profile" component={ProfileScreen}/>
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='MainTabs' component={MainTabs}/>
        <Stack.Screen name='Settings' component={SettingsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
