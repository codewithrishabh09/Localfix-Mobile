import { Link } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import {
  colors,
  radius,
  spacing,
  typography,
} from "@/constants/theme";

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.brandSection}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>L</Text>
          </View>

          <Text style={styles.brand}>LocalFix</Text>

          <Text style={styles.tagline}>
            Report. Track. Fix.
          </Text>
        </View>

        <View style={styles.formSection}>
          <Text style={styles.heading}>Welcome back</Text>

          <Text style={styles.description}>
            Sign in to report and track civic issues in your area.
          </Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>

            <TextInput
              placeholder="Enter your email"
              placeholderTextColor={colors.textMuted}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>

            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={colors.textMuted}
              secureTextEntry
              style={styles.input}
            />
          </View>

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </Pressable>

          <View style={styles.registerRow}>
            <Text style={styles.registerText}>
              Don't have an account?
            </Text>

            <Link
              href="/(auth)/register"
              style={styles.registerLink}
            >
              Register
            </Link>
          </View>
        </View>

        <Text style={styles.footer}>
          Making local communities better, together.
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xxxl,
  },

  brandSection: {
    alignItems: "center",
    marginBottom: spacing.xxxl,
  },

  logo: {
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: radius.xl,
    marginBottom: spacing.md,
  },

  logoText: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "700",
  },

  brand: {
    color: colors.text,
    fontSize: 30,
    fontWeight: "700",
  },

  tagline: {
    marginTop: spacing.xs,
    color: colors.textSecondary,
    ...typography.body,
  },

  formSection: {
    width: "100%",
    maxWidth: 460,
    alignSelf: "center",
  },

  heading: {
    color: colors.text,
    ...typography.heading,
  },

  description: {
    marginTop: spacing.sm,
    marginBottom: spacing.xxl,
    color: colors.textSecondary,
    lineHeight: 22,
    ...typography.body,
  },

  inputGroup: {
    marginBottom: spacing.lg,
  },

  label: {
    marginBottom: spacing.sm,
    color: colors.text,
    ...typography.bodyMedium,
  },

  input: {
    height: 52,
    paddingHorizontal: spacing.lg,
    color: colors.text,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    fontSize: 16,
  },

  button: {
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.sm,
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
  },

  buttonText: {
    color: colors.white,
    ...typography.bodyMedium,
  },

  registerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacing.xxl,
    gap: spacing.xs,
  },

  registerText: {
    color: colors.textSecondary,
    ...typography.caption,
  },

  registerLink: {
    color: colors.primary,
    fontWeight: "600",
    fontSize: 14,
  },

  footer: {
    marginTop: spacing.xxxl,
    textAlign: "center",
    color: colors.textMuted,
    ...typography.small,
  },
});