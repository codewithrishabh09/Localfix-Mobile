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
import { Ionicons } from "@expo/vector-icons";

import AuthHeader from "@/components/auth/AuthHeader";
import AuthInput from "@/components/auth/AuthInput";
import { colors, spacing } from "@/constants/theme";

export default function LoginScreen() {
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
              Welcome Back 👋
            </Text>

            <Text style={styles.description}>
              Login to continue
            </Text>

            <View style={styles.form}>
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
                autoComplete="password"
              />

              <Pressable style={styles.forgotButton}>
                <Text style={styles.forgotText}>
                  Forgot Password?
                </Text>
              </Pressable>

              <Pressable style={styles.loginButton}>
                <Text style={styles.loginButtonText}>
                  Login
                </Text>
              </Pressable>

              <View style={styles.dividerRow}>
                <View style={styles.divider} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.divider} />
              </View>

              <Pressable style={styles.googleButton}>
                <Ionicons
                  name="logo-google"
                  size={18}
                  color="#4285F4"
                />
                <Text style={styles.googleText}>
                  Continue with Google
                </Text>
              </Pressable>

              <View style={styles.registerRow}>
                <Text style={styles.registerText}>
                  Don't have an account?
                </Text>

                <Link
                  href="/(auth)/register"
                  style={styles.registerLink}
                >
                  Sign Up
                </Link>
              </View>
            </View>

            <Text style={styles.footer}>
              Making local communities better, together.
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
  },
  form: {
    gap: spacing.md,
  },
  forgotButton: {
    alignSelf: "flex-end",
    marginTop: -4,
    paddingVertical: 2,
  },
  forgotText: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: "700",
  },
  loginButton: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.xs,
    borderRadius: 25,
    backgroundColor: "#075BFF",
    shadowColor: "#075BFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 7,
    elevation: 4,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "800",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    marginVertical: spacing.xs,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#D9E3F5",
  },
  orText: {
    color: "#60718F",
    fontSize: 11,
    fontWeight: "600",
  },
  googleButton: {
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: "#D5E1FF",
    borderRadius: 24,
    backgroundColor: colors.white,
  },
  googleText: {
    color: "#263B60",
    fontSize: 12,
    fontWeight: "700",
  },
  registerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginTop: spacing.sm,
  },
  registerText: {
    color: "#526789",
    fontSize: 12,
  },
  registerLink: {
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