import { View, Text, StyleSheet, ImageBackground, Image, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const window = Dimensions.get("window");

export default function Messages() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 0}}>
      <ImageBackground style={{height: "100%", width: "100%"}} source={require("../DMStuff/background.jpg")}>

        <Pressable onPress={() => navigation.navigate("DM")}>
          <Image style={styles.pos1} source={require("../DMStuff/Location.png")}/>
          <Image source={require("../DialogWithRachel/Rachel!!.jpg")} style={styles.pos1img}/>
        </Pressable>
        

        <Pressable>
          <Image style={styles.pos2} source={require("../DMStuff/Location.png")}/>
          <Image source={require("../DMStuff/Zoink.png")} style={styles.pos2img}/>
        </Pressable>

        <Pressable>
          <Image style={styles.pos3} source={require("../DMStuff/Location.png")}/>
          <Image source={require("../DMStuff/Doom.jpg")} style={styles.pos3img}/>
        </Pressable>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  pos1: {
    position: "absolute",
    left: window.width * 0.55,
    top: window.height * 0.18,
  },
  pos1img: {
    position: "absolute",
    left: window.width * 0.58,
    top: window.height * 0.1925,
    height: window.height * 0.06, 
    width: window.height * 0.06, 
    borderRadius: window.height * 0.03
  },
  pos2: {
    position: "absolute",
    left: window.width * 0.25,
    top: window.height * 0.32,
  },
  pos2img: {
    position: "absolute",
    left: window.width * 0.28,
    top: window.height * 0.3325,
    height: window.height * 0.06, 
    width: window.height * 0.06, 
    borderRadius: window.height * 0.03
  },
  pos3: {
    position: "absolute",
    left: window.width * 0.55,
    top: window.height * 0.55,
  },
  pos3img: {
    position: "absolute",
    left: window.width * 0.58,
    top: window.height * 0.5625,
    height: window.height * 0.06, 
    width: window.height * 0.06, 
    borderRadius: window.height * 0.03
  },
})