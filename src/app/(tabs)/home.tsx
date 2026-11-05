import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BottomNavigation from "@/components/navigation/BottomNavigation";
import AppCard from "@/components/ui/AppCard";
import {
  colors,
  radius,
  spacing,
  typography,
} from "@/constants/theme";

const nearbyIssues = [
  {
    title: "Road Pothole",
    location: "Civil Lines",
    distance: "0.4 km",
    status: "Reported",
    statusColor: colors.warning,
    statusBackground: colors.warningLight,
    image: require("@/assets/landing.jpg"),
    icon: "warning-outline" as const,
  },
  {
    title: "Garbage Overflow",
    location: "George Town",
    distance: "0.7 km",
    status: "In Progress",
    statusColor: colors.primary,
    statusBackground: colors.primaryLight,
    image: null,
    icon: "trash-outline" as const,
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={["top"]}
    >
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>
                Good Morning 👋
              </Text>

              <View style={styles.locationRow}>
                <Ionicons
                  name="location"
                  size={15}
                  color={colors.primary}
                />

                <Text style={styles.locationText}>
                  Prayagraj, Uttar Pradesh
                </Text>

                <Ionicons
                  name="chevron-down"
                  size={14}
                  color={colors.textSecondary}
                />
              </View>
            </View>

            <Pressable style={styles.notificationButton}>
              <Ionicons
                name="notifications-outline"
                size={22}
                color={colors.text}
              />

              <View style={styles.notificationDot} />
            </Pressable>
          </View>

          {/* Hero / Map Preview */}
          <ImageBackground
            source={require("@/assets/welcome.png")}
            resizeMode="cover"
            style={styles.hero}
            imageStyle={styles.heroImage}
          >
            <View style={styles.heroOverlay}>
              <View style={styles.heroTop}>
                <View>
                  <Text style={styles.heroLabel}>
                    YOUR COMMUNITY
                  </Text>

                  <Text style={styles.heroTitle}>
                    Make your city{"\n"}better, together.
                  </Text>
                </View>

                <View style={styles.issueCount}>
                  <Text style={styles.issueCountNumber}>
                    12
                  </Text>

                  <Text style={styles.issueCountLabel}>
                    Nearby Issues
                  </Text>
                </View>
              </View>

              {/* Map-like visual */}
              <View style={styles.mapPreview}>
                <View style={styles.roadVertical} />
                <View style={styles.roadHorizontal} />

                <View
                  style={[
                    styles.marker,
                    { top: 22, left: "23%" },
                  ]}
                >
                  <Ionicons
                    name="location"
                    size={25}
                    color={colors.danger}
                  />
                </View>

                <View
                  style={[
                    styles.marker,
                    { top: 56, right: "22%" },
                  ]}
                >
                  <Ionicons
                    name="location"
                    size={25}
                    color={colors.warning}
                  />
                </View>

                <View
                  style={[
                    styles.marker,
                    { bottom: 18, left: "48%" },
                  ]}
                >
                  <Ionicons
                    name="location"
                    size={25}
                    color={colors.primary}
                  />
                </View>

                <View style={styles.youAreHere}>
                  <View style={styles.youAreHereDot} />
                  <Text style={styles.youAreHereText}>
                    You are here
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>

          {/* Report CTA */}
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>
                What needs fixing?
              </Text>

              <Text style={styles.sectionSubtitle}>
                Report an issue in your area
              </Text>
            </View>
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.reportCard,
              pressed && styles.pressed,
            ]}
            onPress={() => router.push("/report/create")}
          >
            <View style={styles.reportIconContainer}>
              <Ionicons
                name="camera-outline"
                size={25}
                color={colors.white}
              />
            </View>

            <View style={styles.reportContent}>
              <Text style={styles.reportTitle}>
                Report an Issue
              </Text>

              <Text style={styles.reportDescription}>
                Add a photo and location to report a
                civic problem.
              </Text>
            </View>

            <Ionicons
              name="arrow-forward"
              size={20}
              color={colors.primary}
            />
          </Pressable>

          {/* Nearby Issues */}
          <View style={styles.nearbyHeader}>
            <Text style={styles.sectionTitle}>
              Nearby Issues
            </Text>

            <Pressable
              onPress={() => router.push("/(tabs)/map")}
            >
              <Text style={styles.viewAll}>
                View Map
              </Text>
            </Pressable>
          </View>

          <View style={styles.issueList}>
            {nearbyIssues.map((issue) => (
              <AppCard
                key={issue.title}
                style={styles.issueCard}
              >
                {issue.image ? (
                  <Image
                    source={issue.image}
                    style={styles.issueImage}
                  />
                ) : (
                  <View style={styles.issuePlaceholder}>
                    <Ionicons
                      name={issue.icon}
                      size={25}
                      color={colors.warning}
                    />
                  </View>
                )}

                <View style={styles.issueInfo}>
                  <Text style={styles.issueTitle}>
                    {issue.title}
                  </Text>

                  <View style={styles.issueLocation}>
                    <Ionicons
                      name="location-outline"
                      size={13}
                      color={colors.textMuted}
                    />

                    <Text style={styles.issueLocationText}>
                      {issue.location} • {issue.distance}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.statusBadge,
                      {
                        backgroundColor:
                          issue.statusBackground,
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.statusDot,
                        {
                          backgroundColor:
                            issue.statusColor,
                        },
                      ]}
                    />

                    <Text
                      style={[
                        styles.statusText,
                        {
                          color: issue.statusColor,
                        },
                      ]}
                    >
                      {issue.status}
                    </Text>
                  </View>
                </View>

                <Ionicons
                  name="chevron-forward"
                  size={18}
                  color={colors.textMuted}
                />
              </AppCard>
            ))}
          </View>

          <View style={styles.bottomSpacing} />
        </ScrollView>

        <BottomNavigation />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.lg,
  },

  greeting: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "700",
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 5,
  },

  locationText: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: "500",
  },

  notificationButton: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },

  notificationDot: {
    position: "absolute",
    top: 9,
    right: 10,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.danger,
    borderWidth: 1,
    borderColor: colors.surface,
  },

  hero: {
    minHeight: 285,
    overflow: "hidden",
    borderRadius: radius.xl,
    marginBottom: spacing.xl,
  },

  heroImage: {
    borderRadius: radius.xl,
  },

  heroOverlay: {
    flex: 1,
    padding: spacing.lg,
    backgroundColor: "rgba(5, 37, 91, 0.22)",
  },

  heroTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  heroLabel: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
  },

  heroTitle: {
    marginTop: 5,
    color: colors.white,
    fontSize: 21,
    lineHeight: 27,
    fontWeight: "800",
  },

  issueCount: {
    minWidth: 72,
    paddingHorizontal: 9,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: radius.md,
    backgroundColor: "rgba(255,255,255,0.92)",
  },

  issueCountNumber: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "800",
  },

  issueCountLabel: {
    marginTop: 1,
    color: colors.textSecondary,
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
  },

  mapPreview: {
    position: "relative",
    flex: 1,
    minHeight: 150,
    marginTop: spacing.lg,
    overflow: "hidden",
    borderRadius: radius.lg,
    backgroundColor: "rgba(232, 243, 230, 0.86)",
  },

  roadVertical: {
    position: "absolute",
    width: 72,
    height: "130%",
    left: "42%",
    top: "-15%",
    transform: [{ rotate: "17deg" }],
    backgroundColor: "rgba(255,255,255,0.94)",
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "#CBD5E1",
  },

  roadHorizontal: {
    position: "absolute",
    width: "125%",
    height: 52,
    left: "-12%",
    top: "48%",
    transform: [{ rotate: "-10deg" }],
    backgroundColor: "rgba(255,255,255,0.92)",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#CBD5E1",
  },

  marker: {
    position: "absolute",
  },

  youAreHere: {
    position: "absolute",
    bottom: 10,
    left: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: radius.pill,
    backgroundColor: "rgba(255,255,255,0.94)",
  },

  youAreHereDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },

  youAreHereText: {
    color: colors.textSecondary,
    fontSize: 9,
    fontWeight: "600",
  },

  sectionHeader: {
    marginBottom: spacing.md,
  },

  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "700",
  },

  sectionSubtitle: {
    marginTop: 3,
    color: colors.textMuted,
    fontSize: 12,
  },

  reportCard: {
    minHeight: 82,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    marginBottom: spacing.xl,
    borderRadius: radius.lg,
    backgroundColor: colors.primaryLight,
    borderWidth: 1,
    borderColor: "#BFDBFE",
  },

  pressed: {
    opacity: 0.8,
  },

  reportIconContainer: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.md,
    backgroundColor: colors.primary,
  },

  reportContent: {
    flex: 1,
    marginHorizontal: spacing.md,
  },

  reportTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "700",
  },

  reportDescription: {
    marginTop: 3,
    color: colors.textSecondary,
    fontSize: 11,
    lineHeight: 16,
  },

  nearbyHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.md,
  },

  viewAll: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "700",
  },

  issueList: {
    gap: spacing.md,
  },

  issueCard: {
    minHeight: 92,
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.md,
  },

  issueImage: {
    width: 64,
    height: 64,
    borderRadius: radius.md,
  },

  issuePlaceholder: {
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.md,
    backgroundColor: colors.warningLight,
  },

  issueInfo: {
    flex: 1,
    marginHorizontal: spacing.md,
  },

  issueTitle: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "700",
  },

  issueLocation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    marginTop: 5,
  },

  issueLocationText: {
    color: colors.textMuted,
    fontSize: 10,
  },

  statusBadge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 7,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: radius.pill,
  },

  statusDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
  },

  statusText: {
    fontSize: 9,
    fontWeight: "700",
  },

  bottomSpacing: {
    height: spacing.xl,
  },
});