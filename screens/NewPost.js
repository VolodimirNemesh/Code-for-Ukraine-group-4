import { View, Text, StyleSheet, Dimensions, TextInput, Image, ScrollView } from "react-native";

const window = Dimensions.get("window");

function CustomTile(props) {
  // props: title, description, src
  return (
    <View style={styles.customTile}>
      <View style={styles.textInputs}>
        <Text style={styles.title}>{props.title}</Text>
        <TextInput style={styles.description} placeholder={props.description} placeholderTextColor={"#3E3E3E"}/>
      </View>
      <Image style={styles.image} source={props.src}/>
    </View>
  )
}

export default function NewPost() {
  return (
    <ScrollView style={{flex: 0}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Post Creation</Text>
      </View>
      <View style={styles.uploadImage}>
        <Image style={{ height: 40, width: 40, alignSelf: "center" }} source={require("../postIcons/Arrow.png")}/>
        <Text style={styles.text}>Upload file</Text>
      </View>
      <CustomTile src={require("../postIcons/Book.png")} title="Title" description="Add a title..."/>
      <CustomTile src={require("../postIcons/Text.png")} title="Description" description="Add description..."/>
      <CustomTile src={require("../postIcons/Hashtag.png")} title="Tags" description="#Add tag..."/>
      <CustomTile src={require("../postIcons/Location.png")} title="Location" description="Mark..."/>
      <View style={{ flex: 0, flexDirection: "row", justifyContent: "space-between", marginTop: 40 }}>
        <Text style={{ marginLeft: "10%", fontSize: 20, marginTop: "2.5%" }}>Other options...</Text>
        <View style={{ height: Dimensions.get("window").height * 0.05, width: Dimensions.get("window").width * 0.15, backgroundColor: "#DD1155", marginRight: "10%", borderRadius: 30 }}>
          <Text style={{ fontSize: 20, alignSelf: "center", marginTop: "15%", color: "white", fontWeight: "bold"}}>Post</Text>
        </View>
        
      </View>
    </ScrollView>
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
    borderColor: "#6C6C6C",
    borderWidth: 5,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "500",
    color: "#6C6C6C"
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
  image: {
    height: 75,
    width: 75,
    alignSelf: "center"
  }
})