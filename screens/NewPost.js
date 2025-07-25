import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";

import { faCircleArrowUp, faBook, faBarsStaggered, faHashtag, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

const window = Dimensions.get("window");

function CustomTile(props) {
  // props: title, description, icon
  return (
    <View style={styles.customTile}>
      <View style={styles.textInputs}>
        <Text style={styles.title}>{props.title}</Text>
        <TextInput style={styles.description} placeholder={props.description} placeholderTextColor={"#3E3E3E"}/>
      </View>
      <FontAwesomeIcon style={{ alignSelf: "center" }} icon={props.icon} size={50} color="#000000"/>
    </View>
  )
}

export default function NewPost() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Post Creation</Text>
      </View>
      <View style={styles.uploadImage}>
        <FontAwesomeIcon icon={faCircleArrowUp} size={30} color={"#000000"}/>
        <Text style={styles.text}>Upload file</Text>
      </View>
      <CustomTile icon={faBook} title="Title" description="Add a title..."/>
      <CustomTile icon={faBarsStaggered} title="Description" description="Add description..."/>
      <CustomTile icon={faHashtag} title="Tags" description="#Add tag..."/>
      <CustomTile icon={faMapLocationDot} title="Location" description="Mark..."/>
      <View style={{ flex: 0, flexDirection: "row", justifyContent: "space-between"}}>
        <Text style={{ marginLeft: "10%", fontSize: 20, marginTop: "2.5%" }}>Other options...</Text>
        <View style={{ height: "100%", width: "100%" }}>
          <Text style={{ marginRight: "10%", fontSize: 20, marginTop: "2.5%", backgroundColor: "#DD1155", borderRadius: 30, alignSelf: "center", color: "white", fontWeight: "bold"}}>Post</Text>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgba(204, 0, 92, 0.7)",
    alignItems: "center",
    height: Dimensions.get("window").height * 0.05,
    width: "100%",
  },
  headerText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  uploadImage: {
    marginTop: window.height * 0.02,
    width: "80%",
    height: window.height * 0.25,
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 5,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "500",
  },
  customTile: {
    flex: 1,
    flexDirection: "row",
    marginLeft: "10%",
    marginTop: "4%",
    maxHeight: window.height * 0.1,
    maxWidth: "70%",
  },
  textInputs: {
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 5,
    width: "100%",
    justifyContent: "center",
    marginRight: 10,
  },
  title: {
    marginLeft: 20,
    fontSize: 24,
    fontWeight: "500",
  },
  description: {
    marginLeft: 20,
    fontSize: 20,
  },
})