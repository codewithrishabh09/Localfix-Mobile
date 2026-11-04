import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import BottomNavigation from "@/components/navigation/BottomNavigation";
import HomeHeader from "@/components/home/HomeHeader";
import HomeHeroCard from "@/components/home/HomeHeroCard";
import QuickAction from "@/components/home/QuickAction";
import RecentIssueCard from "@/components/home/RecentIssueCard";

import {
  colors,
  spacing,
} from "@/constants/theme";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      style={styles.container}
    >
      <View style={styles.content}>
        <HomeHeader
          location="Lucknow, UP"
          onNotificationPress={() =>
            router.push("/(tabs)/notifications")
          }
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <HomeHeroCard />

          <View style={styles.quickActionsSection}>
            <Text style={styles.sectionTitle}>
              Quick Actions
            </Text>

            <View style={styles.quickActions}>
              <QuickAction
                label="Report"
                icon="camera-outline"
                onPress={() =>
                  router.push("/report/create")
                }
              />

              <QuickAction
                label="Map"
                icon="location-outline"
                onPress={() =>
                  router.push("/(tabs)/map")
                }
              />

              <QuickAction
                label="My Reports"
                icon="bar-chart-outline"
                onPress={() =>
                  router.push("/(tabs)/reports")
                }
              />

              <QuickAction
                label="Nearby"
                icon="people-outline"
                onPress={() =>
                  router.push("/(tabs)/map")
                }
              />
            </View>
          </View>

          <View style={styles.recentSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                Recent Issues
              </Text>

              <Pressable
                onPress={() =>
                  router.push("/(tabs)/reports")
                }
                style={styles.viewAllButton}
              >
                <Text style={styles.viewAll}>
                  View All
                </Text>

                <Ionicons
                  name="arrow-forward"
                  size={14}
                  color={colors.primary}
                />
              </Pressable>
            </View>

            <RecentIssueCard />
          </View>

          <View style={styles.helpCard}>
            <View style={styles.helpIcon}>
              <Ionicons
                name="megaphone-outline"
                size={20}
                color={colors.primary}
              />
            </View>

            <View style={styles.helpContent}>
              <Text style={styles.helpTitle}>
                See something that needs fixing?
              </Text>

              <Text style={styles.helpText}>
                Report it with a photo and location.
              </Text>
            </View>
          </View>
        </ScrollView>
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
  },

  scrollContent: {
    paddingBottom: spacing.xxl,
  },

  quickActionsSection: {
    marginTop: spacing.xl,
    paddingHorizontal: spacing.lg,
  },

  sectionTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "800",
  },

  quickActions: {
    flexDirection: "row",
    gap: spacing.sm,
    marginTop: spacing.md,
  },

  recentSection: {
    marginTop: spacing.xxl,
    paddingHorizontal: spacing.lg,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.md,
  },

  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },

  viewAll: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "700",
  },

  helpCard: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: spacing.lg,
    marginTop: spacing.xl,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.primaryLight,
    borderRadius: 16,
    backgroundColor: colors.primaryLight,
  },

  helpIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: colors.white,
  },

  helpContent: {
    flex: 1,
    marginLeft: spacing.md,
  },

  helpTitle: {
    color: colors.text,
    fontSize: 13,
    fontWeight: "700",
  },

  helpText: {
    marginTop: 2,
    color: colors.textSecondary,
    fontSize: 11,
  },
});