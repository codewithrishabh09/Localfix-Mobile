import {
  StyleSheet,
  TextInput,
  View,
  TextInputProps,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors, radius, spacing } from "@/constants/theme";

type AuthInputProps = TextInputProps & {
  icon: keyof typeof Ionicons.glyphMap;
};

export default function AuthInput({
  icon,
  style,
  ...props
}: AuthInputProps) {
  return (
    <View style={styles.container}>
      <Ionicons
        name={icon}
        size={19}
        color={colors.primary}
      />

      <TextInput
        {...props}
        placeholderTextColor="#8B9DBD"
        style={[styles.input, style]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 46,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    paddingHorizontal: spacing.md,
    borderWidth: 1,
    borderColor: "#D5E1FF",
    borderRadius: 13,
    backgroundColor: "#FFFFFF",
  },
  input: {
    flex: 1,
    minWidth: 0,
    paddingVertical: 10,
    color: colors.text,
    fontSize: 13,
    outlineStyle: "none",
  } as any,
});