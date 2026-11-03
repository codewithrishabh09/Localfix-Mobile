import { StyleSheet, View, ViewProps } from "react-native";

import {
  colors,
  radius,
  shadows,
  spacing,
} from "@/constants/theme";

type AppCardProps = ViewProps & {
  children: React.ReactNode;
};

export default function AppCard({
  children,
  style,
  ...props
}: AppCardProps) {
  return (
    <View
      {...props}
      style={[styles.card, style]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.card,
  },
});