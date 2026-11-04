import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  colors,
  radius,
  spacing,
} from "@/constants/theme";

export default function RecentIssueCard() {
  return (
    <View style={styles.card}>
      <Image
        source={require("../../assets/localfix-pothole-reference.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text
            style={styles.title}
            numberOfLines={1}
          >
            Pothole on Main Road
          </Text>

          <View style={styles.upvote}>
            <Ionicons
              name="thumbs-up-outline"
              size={13}
              color={colors.primary}
            />

            <Text style={styles.upvoteText}>
              24
            </Text>
          </View>
        </View>

        <View style={styles.locationRow}>
          <Ionicons
            name="location-outline"
            size={13}
            color={colors.textSecondary}
          />

          <Text style={styles.location}>
            2.5 km away
          </Text>
        </View>

        <View style={styles.bottomRow}>
          <View style={styles.status}>
            <View style={styles.statusDot} />

            <Text style={styles.statusText}>
              In Progress
            </Text>
          </View>

          <Text style={styles.time}>
            Reported 2h ago
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
  },

  image: {
    width: 82,
    height: 82,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceMuted,
  },

  content: {
    flex: 1,
    minWidth: 0,
    marginLeft: spacing.md,
    justifyContent: "center",
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.sm,
  },

  title: {
    flex: 1,
    color: colors.text,
    fontSize: 14,
    fontWeight: "700",
  },

  upvote: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },

  upvoteText: {
    color: colors.text,
    fontSize: 11,
    fontWeight: "700",
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    marginTop: 5,
  },

  location: {
    color: colors.textSecondary,
    fontSize: 11,
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing.sm,
  },

  status: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: radius.pill,
    backgroundColor: colors.warningLight,
  },

  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.warning,
  },

  statusText: {
    color: colors.warning,
    fontSize: 10,
    fontWeight: "700",
  },

  time: {
    color: colors.textMuted,
    fontSize: 10,
  },
});