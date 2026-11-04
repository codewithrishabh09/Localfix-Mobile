import { Link } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AuthHeader from "@/components/auth/AuthHeader";
import AuthInput from "@/components/auth/AuthInput";
import { colors, spacing } from "@/constants/theme";

export default function RegisterScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}
        >
          <AuthHeader />

          <View style={styles.formCard}>
            <Text style={styles.heading}>
              Create Account
            </Text>

            <Text style={styles.description}>
              Join your community and help build a better city.
            </Text>

            <View style={styles.form}>
              <AuthInput
                icon="person-outline"
                placeholder="Full Name"
                autoCapitalize="words"
                autoComplete="name"
              />

              <AuthInput
                icon="mail-outline"
                placeholder="Email Address"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
              />

              <AuthInput
                icon="lock-closed-outline"
                placeholder="Password"
                secureTextEntry
                autoComplete="new-password"
              />

              <AuthInput
                icon="shield-checkmark-outline"
                placeholder="Confirm Password"
                secureTextEntry
              />

              <Pressable style={styles.createButton}>
                <Text style={styles.createButtonText}>
                  Create Account
                </Text>
              </Pressable>

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

            <Text style={styles.footer}>
              Report • Track • Improve
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#EAF2FF",
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: "#EAF2FF",
  },
  formCard: {
    flex: 1,
    width: "100%",
    maxWidth: 480,
    alignSelf: "center",
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
    marginTop: -12,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    backgroundColor: "#F8FAFF",
  },
  heading: {
    color: "#071B50",
    fontSize: 22,
    fontWeight: "800",
  },
  description: {
    marginTop: 4,
    marginBottom: spacing.xl,
    color: "#526789",
    fontSize: 13,
    lineHeight: 19,
  },
  form: {
    gap: spacing.md,
  },
  createButton: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.sm,
    borderRadius: 25,
    backgroundColor: "#075BFF",
    shadowColor: "#075BFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 7,
    elevation: 4,
  },
  createButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "800",
  },
  loginRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginTop: spacing.md,
  },
  loginText: {
    color: "#526789",
    fontSize: 12,
  },
  loginLink: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "800",
    textDecorationLine: "underline",
  },
  footer: {
    marginTop: spacing.xxl,
    color: "#8A9DBB",
    fontSize: 10,
    textAlign: "center",
  },
});