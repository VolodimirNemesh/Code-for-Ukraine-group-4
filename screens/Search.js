import { View, Text, StyleSheet, Image, FlatList, Dimensions, TextInput } from "react-native";

function CustomImage(props) {
  return (
    <View style={styles.view}>
      <Image style={styles.img} source={props.src}/>
      <Text style={styles.imageText}>{props.text}</Text>
    </View>
  )
}

const suggestedData = [
  {src: require("../images/MountFuji.jpg"), text: "Mount Fuji"},
  {src: require("../images/HalongBay.jpg"), text: "Halong Bay"},
];
const popularData = [
  {src: require("../images/EiffelTower.jpg"), text: "Eiffel Tower"}, 
  {src: require("../images/LeaningTowerOfPisa.jpg"), text: "Leaning Tower Of Pisa"}
];
const friendsFavouriteData = [
  {src: require("../images/LvivNationalOpera.jpg"), text: "Lviv National Opera"},
  {src: require("../images/MountHoverla.jpg"), text: "Mount Hoverla"}
];

export default function Search() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.search}>
        <TextInput style={{ borderRadius: 10, margin: 2 }} placeholder="Search here..."></TextInput>
      </View>
      <Text style={styles.text}>Suggested</Text>
      <FlatList style={styles.list} showsHorizontalScrollIndicator={false} horizontal={true} data={suggestedData} renderItem={({item}) => <CustomImage src={item.src} text={item.text}/>}></FlatList>
      <Text style={styles.text}>Popular</Text>
      <FlatList style={styles.list} showsHorizontalScrollIndicator={false} horizontal={true} data={popularData} renderItem={({item}) => <CustomImage src={item.src} text={item.text}/>}></FlatList>
      <Text style={styles.text}>Friends Favourite</Text>
      <FlatList style={styles.list} showsHorizontalScrollIndicator={false} horizontal={true} data={friendsFavouriteData} renderItem={({item}) => <CustomImage src={item.src} text={item.text}/>}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 72,
  },
  img: {
    flex: 1,
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 3,
    resizeMode: "stretch",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  imageText: {
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 10,
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#D9D9D9",
    maxHeight: "100%",
    width: Dimensions.get("window").width * 0.7,
    marginRight: 30,
  },
  list: {
    marginLeft: 30,
    maxHeight: "28%",
    maxWidth: "100%",
  },
  text: {
    margin: 5,
    fontWeight: "bold",
    fontSize: 16,
  },
  search: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "rgba(204, 0, 92, 0.7)"
  },
})