import { StyleSheet, Text, View } from "react-native";

import {
  colors,
  radius,
  spacing,
  typography,
} from "@/constants/theme";

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
      <View
        style={[
          styles.logo,
          compact && styles.logoCompact,
        ]}
      >
        <View style={styles.pin}>
          <View style={styles.pinInner} />
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text
          style={[
            styles.brandName,
            compact && styles.brandNameCompact,
          ]}
        >
          LocalFix
        </Text>

        {!compact && (
          <Text style={styles.tagline}>
            Your community, better together.
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },

  centered: {
    justifyContent: "center",
  },

  logo: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
  },

  logoCompact: {
    width: 42,
    height: 42,
    borderRadius: radius.md,
  },

  pin: {
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderRadius: 14,
    transform: [{ rotate: "45deg" }],
  },

  pinInner: {
    width: 8,
    height: 8,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },

  textContainer: {
    gap: 2,
  },

  brandName: {
    color: colors.text,
    fontSize: 26,
    fontWeight: "700",
  },

  brandNameCompact: {
    fontSize: 20,
  },

  tagline: {
    color: colors.textSecondary,
    ...typography.caption,
  },
});