import React, { useState } from 'react';
import {
  View, Text, StyleSheet, Image, Dimensions,
  TextInput, ScrollView, FlatList, TouchableOpacity
} from "react-native";

// ДатаБаза для скрола
const sampleDataSuggested = [
  { id: '1', title: 'Lviv Botanical Garden', image: require('../images/LvivBotanicalGarden.jpeg') },
  { id: '2', title: 'CityOpera', image: require('../images/LvivNationalOpera.jpg') },
  { id: '3', title: 'Tustan', image: require('../images/Tustan.jpg') },
  { id: '4', title: 'Hoverla', image: require('../images/MountHoverla.jpg') },
  { id: '5', title: 'Kiev Lavra', image: require('../images/Lavra.jpg') },
];
const sampleDataPopular = [
  { id: '1', title: 'Leaning Tower', image: require('../images2/LeaningTowerOfPisa.jpg') },
  { id: '2', title: 'Eiffel Tower', image: require('../images2/EiffelTower.jpg') },
  { id: '3', title: 'Mount Fuji', image: require('../images2/MountFuji.jpg') },
  { id: '4', title: 'Halong Bay', image: require('../images2/HalongBay.jpg') },
  { id: '5', title: 'Osaka Castle', image: require('../images2/OsakaCastle.jpg') },
];
const sampleDataFriends = [
  { id: '1', title: 'Mountain Reinier', image: require('../images3/MountainRainier2.jpg') },
  { id: '2', title: 'Karazin University', image: require('../images3/KarazinUniversity.jpg') },
  { id: '3', title: 'Mount Fuji', image: require('../images3/vVsokiiZamok.jpeg') },
  { id: '4', title: 'MukachevoCastle', image: require('../images3/MukachevoCastle.jpg') },
  { id: '5', title: 'Doumo Milan', image: require('../images3/AnorLondo.jpg') },
];

const window = Dimensions.get("window");

export default function Search() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.appName}>SpotSight</Text>
      </View>


      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search here..."
            placeholderTextColor="white"
          />
          <Image source={require('../SearchIcons/LoopSearch.png')} style={styles.loopIcon} />
        </View>
      </View>

     {/* //От це типу горизонтальні скроли, але треба доробити розмір зображень// */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderHorizontalListSuggested("Suggested", 'trending')}
        {renderHorizontalListPopular("Popular", 'popular')}
        {renderHorizontalListFriends("Friends Favorite", 'friends')}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    height: Dimensions.get("window").height * 0.1,
    backgroundColor: '#CC005C',
    justifyContent: 'center',
    paddingLeft: 16,
  },
  appName: {
    fontFamily: 'PassionOne',
    fontSize: 30,
    color: 'white',
  },
  searchContainer: {
    backgroundColor: '#FD4A9B',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  searchInput: {
    flex: 1,
    color: 'white',
  },
  loopIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,

  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'PassionOne',
    marginBottom: 10,
  },
  card: {
    width: 300,
    marginRight: 14,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
    elevation: 3,
    position: 'relative',
    
  },
  image: {
    width: '100%',
    height: 150,
  },
  bookmarkButton: {
    position: 'absolute',
    top: 4,
    right: 4,
    padding: 2,
    
  },
  bookmarkIcon: {
    width: 30,
    height: 30,
  },
  caption: {
    backgroundColor: '#eee',
    paddingVertical: 1,
    paddingHorizontal: 8,
    height: 40,
  },
  captionText: {
    top: 5,
    fontSize: 20,
    color: '#333',
    fontFamily: "PassionOne"
  }
});
