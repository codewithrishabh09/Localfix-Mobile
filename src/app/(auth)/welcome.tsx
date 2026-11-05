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
      source={require("../../assets/welcome.png")}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.brand}>
            <LocalFixBrand centered />
          </View>

          <View style={styles.bottomContent}>
            <Text style={styles.heading}>
              Together for a{"\n"}Better City
            </Text>

            <Text style={styles.description}>
              Report local problems, track progress,
              and help improve your community.
            </Text>

            <Link href="/(auth)/login" asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>
                  Get Started
                </Text>

                <Text style={styles.arrow}>
                  →
                </Text>
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
    backgroundColor: "#EAF4FF",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(235, 245, 255, 0.04)",
  },

  safeArea: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xl,
  },

  brand: {
    alignItems: "center",
    marginTop: spacing.xxl,
  },

  bottomContent: {
    width: "100%",
    maxWidth: 430,
    alignSelf: "center",
    alignItems: "center",
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xxl,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "rgba(242, 248, 255, 0.96)",
  },

  heading: {
    color: "#08235D",
    fontSize: 32,
    lineHeight: 39,
    fontWeight: "800",
    textAlign: "center",
  },

  description: {
    maxWidth: 340,
    marginTop: spacing.md,
    marginBottom: spacing.xxl,
    color: "#526789",
    fontSize: 13,
    lineHeight: 20,
    textAlign: "center",
  },

  button: {
    width: "100%",
    minHeight: 54,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    backgroundColor: colors.primary,
  },

  buttonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "800",
  },

  arrow: {
    marginLeft: spacing.sm,
    color: colors.white,
    fontSize: 21,
  },

  loginRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    marginTop: spacing.lg,
  },

  loginText: {
    color: "#526789",
    fontSize: 12,
  },

  loginLink: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "800",
  },
});