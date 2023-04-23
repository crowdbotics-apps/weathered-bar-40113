import { ImageBackground } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.NHweCtAU} source={require("./A line.jpg")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.qnvhAiYY} source={require("./ball grow.jpg")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.pbLZRzzl} source={require("./Mermaid.jpg")} resizeMode="cover"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  NHweCtAU: {
    width: 102,
    height: 311,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
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
    top: 2,
    left: 118
  },
  pbLZRzzl: {
    width: 134,
    height: 309,
    flexDirection: "row",
    flex: 1,
    position: "absolute",
    top: -1,
    justifyContent: "center",
    alignItems: "center",
    left: 263
  }
});
export default Untitled1;