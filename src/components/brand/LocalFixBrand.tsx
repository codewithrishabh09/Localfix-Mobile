import { Image, StyleSheet, View } from "react-native";

type LocalFixBrandProps = {
  compact?: boolean;
  centered?: boolean;
};

export default function LocalFixBrand({
  compact = false,
  centered = false,
}: LocalFixBrandProps) {
  return (
    <View style={[styles.container, centered && styles.centered]}>
      <Image
        source={require("../../assets/localfix-logo-reference.png")}
        resizeMode="contain"
        style={[
          styles.logo,
          compact && styles.compactLogo,
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
  },
  logo: {
    width: 270,
    height: 100,
  },
  compactLogo: {
    width: 190,
    height: 70,
  },
});