import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = ({
  route
}) => {
  const navigation = useNavigation();
  const {} = route.params || {};
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("Untitled2", {});
      }}><ImageBackground style={styles.NHweCtAU} source={require("./A line.jpg")} resizeMode="cover"></ImageBackground></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled2", {});
      }}><ImageBackground style={styles.qnvhAiYY} source={require("./ball grow.jpg")} resizeMode="cover"></ImageBackground></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled2", {});
      }}><ImageBackground style={styles.pbLZRzzl} source={require("./Mermaid.jpg")} resizeMode="cover"></ImageBackground></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#10bff6"
  },
  NHweCtAU: {
    width: 102,
    height: 311,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    top: -8,
    left: -1,
    alignItems: "start"
  },
  qnvhAiYY: {
    width: 127,
    height: 307,
    flexDirection: "row",
    flex: 1,
    alignItems: "start",
    justifyContent: "center",
    position: "absolute",
    top: -6,
    left: 112
  },
  pbLZRzzl: {
    width: 134,
    height: 309,
    flexDirection: "row",
    flex: 1,
    position: "absolute",
    top: -7,
    justifyContent: "center",
    alignItems: "center",
    left: 261
  }
});
export default Untitled1;