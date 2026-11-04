import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import {
  colors,
  radius,
  spacing,
} from "@/constants/theme";

export default function HomeHeroCard() {
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require("../../assets/localfix-cityscape-reference.png")}
        resizeMode="cover"
        imageStyle={styles.image}
        style={styles.card}
      >
        <View style={styles.overlay}>
          <Text style={styles.smallText}>
            TOGETHER FOR
          </Text>

          <Text style={styles.title}>
            A Better City
          </Text>

          <View style={styles.accent} />

          <Text style={styles.description}>
            Report local problems and help make
            your neighbourhood better.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.md,
    borderRadius: radius.xl,
    overflow: "hidden",
  },

  card: {
    minHeight: 155,
    justifyContent: "flex-end",
  },

  image: {
    borderRadius: radius.xl,
  },

  overlay: {
    minHeight: 155,
    justifyContent: "flex-end",
    padding: spacing.lg,
    backgroundColor: "rgba(0, 45, 120, 0.18)",
  },

  smallText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
  },

  title: {
    marginTop: 2,
    color: colors.white,
    fontSize: 25,
    fontWeight: "800",
  },

  accent: {
    width: 48,
    height: 3,
    marginTop: spacing.sm,
    borderRadius: 2,
    backgroundColor: "#16BFFF",
  },

  description: {
    maxWidth: 240,
    marginTop: spacing.sm,
    color: colors.white,
    fontSize: 12,
    lineHeight: 17,
    fontWeight: "500",
  },
});