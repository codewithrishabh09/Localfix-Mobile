import {
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";

import LocalFixBrand from "@/components/brand/LocalFixBrand";

export default function AuthHeader() {
  return (
    <ImageBackground
      source={require("../../assets/landing.jpg")}
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
    height: 210,
    justifyContent: "center",
    overflow: "hidden",
  },

  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(255, 255, 255, 0.20)",
  },
});