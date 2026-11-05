import { Link, useRouter } from "expo-router";
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
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import AuthHeader from "@/components/auth/AuthHeader";
import AuthInput from "@/components/auth/AuthInput";
import { colors, spacing } from "@/constants/theme";
import { register } from "@/features/auth/authApi";
import { useAuth } from "@/features/auth/AuthContext";

export default function RegisterScreen() {
  const router = useRouter();

  const { signIn } = useAuth();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [error, setError] = useState("");

  async function handleRegister() {
    if (
      !fullName.trim() ||
      !email.trim() ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setError("");
      setIsSubmitting(true);

      await register({
        full_name: fullName.trim(),
        email: email.trim(),
        password,
      });

      await signIn({
        email: email.trim(),
        password,
      });

      router.replace("/(tabs)/home");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to create account.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={["top", "bottom"]}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : undefined
        }
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
              Join your community and help build a better
              city.
            </Text>

            <View style={styles.form}>
              <AuthInput
                icon="person-outline"
                placeholder="Full Name"
                value={fullName}
                onChangeText={setFullName}
                autoCapitalize="words"
                autoComplete="name"
              />

              <AuthInput
                icon="mail-outline"
                placeholder="Email Address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
              />

              <AuthInput
                icon="lock-closed-outline"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoComplete="new-password"
              />

              <AuthInput
                icon="shield-checkmark-outline"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />

              {error ? (
                <View style={styles.errorBox}>
                  <Ionicons
                    name="alert-circle-outline"
                    size={16}
                    color={colors.danger}
                  />

                  <Text style={styles.errorText}>
                    {error}
                  </Text>
                </View>
              ) : null}

              <Pressable
                style={({ pressed }) => [
                  styles.createButton,
                  pressed && styles.pressed,
                  isSubmitting && styles.disabled,
                ]}
                onPress={handleRegister}
                disabled={isSubmitting}
              >
                <Text style={styles.createButtonText}>
                  {isSubmitting
                    ? "Creating Account..."
                    : "Create Account"}
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

  errorBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 10,
    backgroundColor: colors.dangerLight,
  },

  errorText: {
    flex: 1,
    color: colors.danger,
    fontSize: 11,
    fontWeight: "600",
  },

  createButton: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.sm,
    borderRadius: 25,
    backgroundColor: "#075BFF",
  },

  createButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "800",
  },

  pressed: {
    opacity: 0.8,
  },

  disabled: {
    opacity: 0.55,
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