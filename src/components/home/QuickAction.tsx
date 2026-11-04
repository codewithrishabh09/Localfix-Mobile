import {
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  colors,
  radius,
  spacing,
} from "@/constants/theme";

type QuickActionProps = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
};

export default function QuickAction({
  label,
  icon,
  onPress,
}: QuickActionProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
      ]}
    >
      <ViewIcon icon={icon} />

      <Text style={styles.label}>
        {label}
      </Text>
    </Pressable>
  );
}

function ViewIcon({
  icon,
}: {
  icon: keyof typeof Ionicons.glyphMap;
}) {
  return (
    <Ionicons
      name={icon}
      size={23}
      color={colors.primary}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 74,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.xs,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
  },

  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },

  label: {
    marginTop: spacing.sm,
    color: colors.text,
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
  },
});