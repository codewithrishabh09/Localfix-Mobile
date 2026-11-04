import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BottomNavigation from "@/components/navigation/BottomNavigation";
import {
  colors,
  spacing,
} from "@/constants/theme";

export default function NotificationsScreen() {
  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>
          Notifications
        </Text>

        <Text style={styles.subtitle}>
          Stay updated about your complaints and nearby issues.
        </Text>
      </View>

      <BottomNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flex: 1,
    padding: spacing.xl,
  },

  title: {
    color: colors.text,
    fontSize: 25,
    fontWeight: "800",
  },

  subtitle: {
    marginTop: spacing.sm,
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
});