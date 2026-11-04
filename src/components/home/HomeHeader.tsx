import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors, spacing } from "@/constants/theme";

type HomeHeaderProps = {
  location?: string;
  onNotificationPress?: () => void;
};

export default function HomeHeader({
  location = "Lucknow, UP",
  onNotificationPress,
}: HomeHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <View style={styles.locationIcon}>
          <Ionicons
            name="location"
            size={18}
            color={colors.primary}
          />
        </View>

        <View>
          <Text style={styles.locationLabel}>
            Your location
          </Text>

          <View style={styles.locationRow}>
            <Text style={styles.locationText}>
              {location}
            </Text>

            <Ionicons
              name="chevron-down"
              size={14}
              color={colors.text}
            />
          </View>
        </View>
      </View>

      <Pressable
        style={styles.notificationButton}
        onPress={onNotificationPress}
      >
        <Ionicons
          name="notifications-outline"
          size={23}
          color={colors.text}
        />

        <View style={styles.notificationDot} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
  },

  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },

  locationIcon: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 17,
    backgroundColor: colors.primaryLight,
  },

  locationLabel: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: "500",
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    marginTop: 1,
  },

  locationText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "700",
  },

  notificationButton: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 21,
    backgroundColor: colors.surface,
  },

  notificationDot: {
    position: "absolute",
    top: 9,
    right: 9,
    width: 7,
    height: 7,
    borderWidth: 1.5,
    borderColor: colors.surface,
    borderRadius: 4,
    backgroundColor: colors.danger,
  },
});