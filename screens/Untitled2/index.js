import { Text } from "react-native";
import { ImageBackground } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.sSaElOYB} source={require("./rebeccarhodes2.png")} resizeMode="cover"></ImageBackground><Text style={styles.dkKhoDyF}>A01</Text><ImageBackground style={styles.TAQJZHYF} source={require("./rebeccarhodes2.png")} resizeMode="cover"></ImageBackground><Text style={styles.ajvtSOrH}>A02</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  sSaElOYB: {
    width: 239,
    height: 309,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "no-wrap",
    position: "absolute",
    left: 4,
    top: 4
  },
  dkKhoDyF: {
    width: 77,
    height: 24,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 117,
    top: 324
  },
  TAQJZHYF: {
    width: 210,
    height: 303,
    position: "absolute",
    top: 8,
    left: 296
  },
  ajvtSOrH: {
    width: 50,
    height: 23,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 323,
    flexDirection: "row",
    flex: 1,
    left: 404
  }
});
export default Untitled2;