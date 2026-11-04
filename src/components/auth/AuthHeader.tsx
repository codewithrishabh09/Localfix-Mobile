import {
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";

import LocalFixBrand from "@/components/brand/LocalFixBrand";

export default function AuthHeader() {
  return (
    <ImageBackground
      source={require("../../assets/localfix-cityscape-reference.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.overlay}>
        <LocalFixBrand centered compact />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 175,
    justifyContent: "center",
    backgroundColor: "#DCEBFF",
  },
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(9, 54, 130, 0.12)",
  },
});