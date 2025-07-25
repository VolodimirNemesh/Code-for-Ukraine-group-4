import { height } from '@fortawesome/free-brands-svg-icons/fa11ty';
import { StyleSheet, Text, Image, View, ScrollView, Dimensions } from 'react-native';


function Description (props) {
  return (
    <View style={styles.description}>
      <Image style={styles.pfps1} source={{uri: props.PFP}} />
      <Text style={styles.text1}>{props.description}</Text>
    </View>
  )
}
function OneComponent(props) {
  return (
    <View style={[styles.onecomp, props.secondPost && {marginTop: 40}]}>
      <Image style={styles.picture1} source={{uri: props.URL}} />
      <Description PFP={props.pfp} description={props.description} />
    </View>
  )
}


function PeakComponent (props) {
  return (
    <View style={styles.peakcomp}>
      <OneComponent URL={props.link1} pfp={props.pfp1} description={props.desc1}/>
      <OneComponent URL={props.link2} pfp={props.pfp2} description={props.desc2} secondPost/>
    </View>
  )
}

export default function App() {
  return (
      <View style={styles.container}>
        <ScrollView style={styles.feed}>
          <PeakComponent link1='https://cioviews.com/wp-content/uploads/2020/12/1-3.jpg' pfp1='https://static.wikia.nocookie.net/evangelion/images/0/0d/OP_C016_rei.jpg/revision/latest?cb=20171121184144&path-prefix=ru'
          desc1='Ayanami Rei' link2='https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg' pfp2='https://s3.amazonaws.com/comicgeeks/characters/avatars/56885.jpg'
          desc2='Langley Asuka' />
          <PeakComponent link1='https://www.shutterstock.com/image-photo/tranquil-park-landscape-bathed-morning-600nw-2503668517.jpg' pfp1='https://upload.wikimedia.org/wikipedia/ru/thumb/1/1c/%D0%9C%D0%B8%D1%81%D0%B0%D1%82%D0%BE_%D0%9A%D0%B0%D1%86%D1%83%D1%80%D0%B0%D0%B3%D0%B8.jpg/330px-%D0%9C%D0%B8%D1%81%D0%B0%D1%82%D0%BE_%D0%9A%D0%B0%D1%86%D1%83%D1%80%D0%B0%D0%B3%D0%B8.jpg'
          desc1='Misato Katsuragi' link2='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUXmaT1Y9QmPrxOlJd0qIJ9RJDAjj7FaSFXA&s' pfp2='https://static.wikia.nocookie.net/base-breaking-character/images/b/b3/Shinji_Ikari.webp/revision/latest?cb=20231130034352'
          desc2='Ikari Shinji' />
          <PeakComponent link1='https://i.pinimg.com/736x/e1/fc/b9/e1fcb990f2ace02f66abb88cd0fd6969.jpg' pfp1='https://static.wikia.nocookie.net/evangelion/images/0/0c/24_C282_kaworu.jpg/revision/latest?cb=20190817125756&path-prefix=ru'
          desc1='Nagisa Kaworu' link2='https://w0.peakpx.com/wallpaper/615/949/HD-wallpaper-fall-autumn-beautiful-red-nature-beauty-landscapes-scenery-thumbnail.jpg' pfp2='https://static.wikia.nocookie.net/anime-characters-fight/images/4/46/Gendich.png/revision/latest?cb=20190515120636&path-prefix=ru'
          desc2='Ikari Gendo' />
          <Image style={styles.threshold} source={{uri: 'https://spaces-cdn.clipsafari.com/zt1pyfaugdhz2przrsvqq0arnytw'}} />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  feed: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 3,
  },
  picture1: {
    height: Dimensions.get("window").height * 0.3,
    width: Dimensions.get("window").width * 0.45,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'left',
    marginLeft: 10,
    marginTop: 10,
  },
  text1: {
    fontSize: 14,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: -30,
  },
  pfps1: {
    height: 30,
    width: 30,
    borderWidth: 1,
    borderRadius: 50,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: -30,
  },
  text2: {
    fontSize: 14,
    marginLeft: 10,
    marginTop: 35,
  },
  pfps2: {
    height: 30,
    width: 30,
    borderWidth: 1,
    borderRadius: 50,
    marginLeft: 45,
    marginTop: 30,
  },
  description: {
    flex: 1,
    flexDirection: 'row',
  },
  threshold: {
    height: 1,
    width: 175,
    justifyConten: 'center',
    marginTop: 50,
  }, 
  onecomp: {
    flex: 1,
    flexDirection: 'column',
  },
  peakcomp: {
    flex: 1,
    flexDirection: 'row',
  }
})