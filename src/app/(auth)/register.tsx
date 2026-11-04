import { Link } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import LocalFixBrand from "@/components/brand/LocalFixBrand";
import {
  colors,
  radius,
  spacing,
  typography,
} from "@/constants/theme";

export default function RegisterScreen() {
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
          <LocalFixBrand centered />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.heading}>Create your account</Text>

          <Text style={styles.description}>
            Join your community and start reporting local issues.
          </Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full name</Text>

            <TextInput
              placeholder="Enter your full name"
              placeholderTextColor={colors.textMuted}
              style={styles.input}
            />
          </View>

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
              placeholder="Create a password"
              placeholderTextColor={colors.textMuted}
              secureTextEntry
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirm password</Text>

            <TextInput
              placeholder="Confirm your password"
              placeholderTextColor={colors.textMuted}
              secureTextEntry
              style={styles.input}
            />
          </View>

          <View style={styles.button}>
            <Text style={styles.buttonText}>Create Account</Text>
          </View>

          <View style={styles.loginRow}>
            <Text style={styles.loginText}>
              Already have an account?
            </Text>

            <Link
              href="/(auth)/login"
              style={styles.loginLink}
            >
              Sign in
            </Link>
          </View>
        </View>

        <Text style={styles.footer}>
          Your reports help create better communities.
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

  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacing.xxl,
    gap: spacing.xs,
  },

  loginText: {
    color: colors.textSecondary,
    ...typography.caption,
  },

  loginLink: {
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