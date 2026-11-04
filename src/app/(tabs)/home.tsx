import { StyleSheet, Text, View } from "react-native";

import BottomNavigation from "@/components/navigation/BottomNavigation";
import { colors } from "@/constants/theme";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>LocalFix</Text>

        <Text style={styles.subtitle}>
          Your community, better together.
        </Text>
      </View>

      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 8,
    color: colors.textSecondary,
    fontSize: 16,
  },
});