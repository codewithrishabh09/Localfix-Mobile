import { Pressable, StyleSheet, Text, View } from "react-native";
import { usePathname, useRouter } from "expo-router";

import { colors, spacing } from "@/constants/theme";

const tabs = [
  {
    label: "Home",
    route: "/(tabs)/home",
    icon: "⌂",
  },
  {
    label: "Map",
    route: "/(tabs)/map",
    icon: "⌖",
  },
  {
    label: "Reports",
    route: "/(tabs)/reports",
    icon: "▤",
  },
  {
    label: "Profile",
    route: "/(tabs)/profile",
    icon: "◯",
  },
] as const;

export default function BottomNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        {tabs.map((tab) => {
          const active = pathname.includes(
            tab.route.split("/").pop() ?? "",
          );

          return (
            <Pressable
              key={tab.label}
              style={styles.tab}
              onPress={() => router.push(tab.route)}
            >
              <Text
                style={[
                  styles.icon,
                  active && styles.activeIcon,
                ]}
              >
                {tab.icon}
              </Text>

              <Text
                style={[
                  styles.label,
                  active && styles.activeLabel,
                ]}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        })}

        <Pressable
          style={styles.reportButton}
          onPress={() => router.push("/report/create")}
        >
          <Text style={styles.reportIcon}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.sm,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  navigation: {
    minHeight: 68,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    position: "relative",
  },

  tab: {
    minWidth: 58,
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },

  icon: {
    fontSize: 21,
    color: colors.textMuted,
  },

  activeIcon: {
    color: colors.primary,
  },

  label: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: "500",
  },

  activeLabel: {
    color: colors.primary,
    fontWeight: "700",
  },

  reportButton: {
    width: 56,
    height: 56,
    marginTop: -28,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    backgroundColor: colors.primary,
    borderWidth: 4,
    borderColor: colors.surface,
  },

  reportIcon: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "400",
    lineHeight: 32,
  },
});