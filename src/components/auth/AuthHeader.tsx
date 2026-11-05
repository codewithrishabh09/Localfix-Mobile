import {
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";

import LocalFixBrand from "@/components/brand/LocalFixBrand";

export default function AuthHeader() {
  return (
    <ImageBackground
      source={require("@/assets/landing.jpg")}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.overlay}>
        <View style={styles.brandSurface}>
          <LocalFixBrand centered compact />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 205,
    justifyContent: "center",
    overflow: "hidden",
  },

  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(5, 35, 92, 0.12)",
  },

  brandSurface: {
    minWidth: 285,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 18,
    backgroundColor: "rgba(7, 38, 94, 0.72)",
  },
});