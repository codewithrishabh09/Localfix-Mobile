import { Image, StyleSheet, View } from "react-native";

import { spacing } from "@/constants/theme";

type LocalFixBrandProps = {
  compact?: boolean;
  centered?: boolean;
};

export default function LocalFixBrand({
  compact = false,
  centered = false,
}: LocalFixBrandProps) {
  return (
    <View
      style={[
        styles.container,
        centered && styles.centered,
      ]}
    >
      <Image
        source={require("../../assets/localfix-logo-reference.png")}
        resizeMode="contain"
        style={[
          styles.logo,
          compact && styles.logoCompact,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },

  centered: {
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 270,
    height: 84,
  },

  logoCompact: {
    width: 180,
    height: 55,
  },
});