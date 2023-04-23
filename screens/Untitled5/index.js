import { ImageBackground } from "react-native";
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ScreenComponent = () => {
  return <ScrollView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.leftColumn}>
          <Image source={require("./rebeccarhodes2.png")} style={styles.image} />
          <Text style={styles.title}>A01</Text>
          <Text style={styles.description}>Product Description</Text>
          <Text style={styles.price}>$9.99</Text>
        <ImageBackground style={styles.bKMcKlGo} source={require("./rebeccarhodes2.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.YInrWBPk} source={require("./rebeccarhodes2.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.bRcVuqKa} source={require("./rebeccarhodes2.png")} resizeMode="cover"></ImageBackground></View>
        <View style={styles.rightColumn}>
          <Text style={styles.calendar}>Calendar</Text>
        </View>
      </View>
      <View style={styles.row}>
        
        
      </View>
      <View style={styles.row}>
        
        
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20
  },
  leftColumn: {
    flex: 1,
    marginRight: 10,
    width: 629,
    height: 649
  },
  rightColumn: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    width: 629,
    height: 597
  },
  image: {
    width: 232,
    height: 267,
    resizeMode: "cover",
    marginBottom: 10,
    position: "absolute",
    left: 1,
    top: -5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    position: "absolute",
    left: 12,
    top: 553
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
    position: "absolute",
    left: 10,
    top: 581
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    position: "absolute",
    left: 9,
    top: 612
  },
  calendar: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666'
  },
  bKMcKlGo: {
    width: 229,
    height: 266,
    position: "absolute",
    left: 316,
    top: -2
  },
  YInrWBPk: {
    width: 222,
    height: 244,
    position: "absolute",
    left: 4,
    top: 294
  },
  bRcVuqKa: {
    width: 223,
    height: 242,
    position: "absolute",
    left: 317,
    top: 294
  }
});
export default ScreenComponent;