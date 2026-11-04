import { StyleSheet, View } from "react-native";

import LocalFixBrand from "@/components/brand/LocalFixBrand";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import { colors } from "@/constants/theme";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <LocalFixBrand centered />
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
});