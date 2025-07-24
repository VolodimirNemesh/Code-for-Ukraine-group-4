import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuestion, faHouse, faMagnifyingGlass, faCirclePlus, faComments, faUser } from '@fortawesome/free-solid-svg-icons'


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
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarLabel: route.name,
        headerShown: true,
        title: "SpotSight",
        headerStyle: { backgroundColor: "#CC005C" },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: { fontWeight: "bold" },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = faQuestion;

          if (route.name === "Home") {
            iconName = faHouse;
          } else if (route.name === "Search") {
            iconName = faMagnifyingGlass;
          } else if (route.name === "New Post") {
            iconName = faCirclePlus;
          } else if (route.name === "Messages") {
            iconName = faComments;
          } else if (route.name === "Profile") {
            iconName = faUser;
          }

          return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarStyle: { backgroundColor: "#DD1155" }
      })}>
      <Tabs.Screen name="Home" component={HomeScreen}/>
      <Tabs.Screen name="Search" component={SearchScreen}/>
      <Tabs.Screen name="New Post" component={NewPostScreen}/>
      <Tabs.Screen name="Messages" component={MessagesScreen}/>
      <Tabs.Screen name="Profile" component={ProfileScreen}/>
    </Tabs.Navigator>
  )
}

export default function App() {

  library.add(faQuestion, faHouse, faMagnifyingGlass, faCirclePlus, faComments, faUser);
  
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