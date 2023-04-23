import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }} style={styles.VUVOfJNZ}><Pressable onPress={() => {
        navigation.navigate("Untitled5", {});
      }}><ImageBackground style={styles.sSaElOYB} source={require("./rebeccarhodes2.png")} resizeMode="cover"></ImageBackground></Pressable><Text style={styles.dkKhoDyF}>A01</Text><Pressable onPress={() => {
        navigation.navigate("Untitled5", {});
      }}><ImageBackground style={styles.TAQJZHYF} source={require("./rebeccarhodes2.png")} resizeMode="cover"></ImageBackground></Pressable><Text style={styles.ajvtSOrH}>A02</Text></ScrollView>
    <Pressable onPress={() => {
      navigation.navigate("Untitled1", {});
    }}><Text style={styles.jdNqksrJ}>Back</Text></Pressable></SafeAreaView>;
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
    left: 5,
    top: 10
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
    left: 115,
    top: 337
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
  },
  VUVOfJNZ: {
    borderRadius: 0
  },
  jdNqksrJ: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 6,
    top: 1
  }
});
export default Untitled2;