import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ScreenComponent = () => {
  return <ScrollView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.leftColumn}>
          <Image source={require("./rebeccarhodes2.png")} style={styles.image} />
          <Text style={styles.title}>Product Title</Text>
          <Text style={styles.description}>Product Description</Text>
          <Text style={styles.price}>$9.99</Text>
        </View>
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
    width: 388,
    height: 489,
    resizeMode: "cover",
    marginBottom: 10,
    position: "relative",
    left: 0
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  description: {
    fontSize: 16,
    marginBottom: 5
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  calendar: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666'
  }
});
export default ScreenComponent;