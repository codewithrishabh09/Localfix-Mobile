import { Link } from "expo-router";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import LocalFixBrand from "@/components/brand/LocalFixBrand";
import { colors, spacing } from "@/constants/theme";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../../assets/localfix-cityscape-reference.png")}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.brandSection}>
            <LocalFixBrand centered />

            <Text style={styles.tagline}>
              Report • Track • Improve
            </Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.slogan}>
              Together for a{"\n"}Better City
            </Text>

            <Link href="/(auth)/login" asChild>
              <Pressable style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>
                  Get Started
                </Text>
                <Text style={styles.arrow}>→</Text>
              </Pressable>
            </Link>

            <View style={styles.loginRow}>
              <Text style={styles.loginText}>
                Already have an account?
              </Text>

              <Link
                href="/(auth)/login"
                style={styles.loginLink}
              >
                Login
              </Link>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#06265D",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 24, 75, 0.28)",
  },
  safeArea: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xl,
  },
  brandSection: {
    alignItems: "center",
    marginTop: spacing.xxxl,
  },
  tagline: {
    color: colors.white,
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 1,
    marginTop: -spacing.sm,
  },
  content: {
    width: "100%",
    maxWidth: 420,
    alignSelf: "center",
    alignItems: "center",
    paddingBottom: spacing.xxl,
  },
  slogan: {
    color: colors.white,
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 40,
    marginBottom: spacing.xxl,
  },
  primaryButton: {
    minHeight: 54,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#075BFF",
    borderWidth: 1,
    borderColor: "#55D8FF",
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "800",
  },
  arrow: {
    color: colors.white,
    fontSize: 20,
    marginLeft: spacing.sm,
  },
  loginRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    marginTop: spacing.xl,
  },
  loginText: {
    color: colors.white,
    fontSize: 12,
  },
  loginLink: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "800",
    textDecorationLine: "underline",
  },
});