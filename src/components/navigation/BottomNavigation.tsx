import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  usePathname,
  useRouter,
} from "expo-router";

import {
  colors,
  radius,
  spacing,
} from "@/constants/theme";

const tabs = [
  {
    label: "Home",
    route: "/(tabs)/home",
    icon: "home-outline" as const,
    activeIcon: "home" as const,
  },
  {
    label: "Map",
    route: "/(tabs)/map",
    icon: "location-outline" as const,
    activeIcon: "location" as const,
  },
  {
    label: "Notifications",
    route: "/(tabs)/notifications",
    icon: "notifications-outline" as const,
    activeIcon: "notifications" as const,
  },
  {
    label: "Profile",
    route: "/(tabs)/profile",
    icon: "person-outline" as const,
    activeIcon: "person" as const,
  },
] as const;

export default function BottomNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <TabItem
          tab={tabs[0]}
          active={pathname.includes("/home")}
          onPress={() => router.push(tabs[0].route)}
        />

        <TabItem
          tab={tabs[1]}
          active={pathname.includes("/map")}
          onPress={() => router.push(tabs[1].route)}
        />

        <Pressable
          style={({ pressed }) => [
            styles.reportButton,
            pressed && styles.reportPressed,
          ]}
          onPress={() => router.push("/report/create")}
        >
          <Ionicons
            name="add"
            size={31}
            color={colors.white}
          />
        </Pressable>

        <TabItem
          tab={tabs[2]}
          active={pathname.includes("/notifications")}
          onPress={() => router.push(tabs[2].route)}
          showBadge
        />

        <TabItem
          tab={tabs[3]}
          active={pathname.includes("/profile")}
          onPress={() => router.push(tabs[3].route)}
        />
      </View>
    </View>
  );
}

type TabItemProps = {
  tab: (typeof tabs)[number];
  active: boolean;
  onPress: () => void;
  showBadge?: boolean;
};

function TabItem({
  tab,
  active,
  onPress,
  showBadge = false,
}: TabItemProps) {
  return (
    <Pressable
      style={styles.tab}
      onPress={onPress}
    >
      <View>
        <Ionicons
          name={
            active
              ? tab.activeIcon
              : tab.icon
          }
          size={21}
          color={
            active
              ? colors.primary
              : colors.textMuted
          }
        />

        {showBadge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              2
            </Text>
          </View>
        )}
      </View>

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
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.sm,
    paddingTop: spacing.sm,
    paddingBottom: spacing.sm,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  navigation: {
    minHeight: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  tab: {
    width: 65,
    minHeight: 54,
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },

  label: {
    color: colors.textMuted,
    fontSize: 9,
    fontWeight: "600",
    textAlign: "center",
  },

  activeLabel: {
    color: colors.primary,
    fontWeight: "700",
  },

  reportButton: {
    width: 58,
    height: 58,
    marginTop: -28,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: colors.surface,
    borderRadius: 29,
    backgroundColor: colors.primary,
    ...{
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 6,
    },
  },

  reportPressed: {
    transform: [{ scale: 0.94 }],
  },

  badge: {
    position: "absolute",
    top: -5,
    right: -8,
    minWidth: 14,
    height: 14,
    paddingHorizontal: 3,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: colors.surface,
    borderRadius: 7,
    backgroundColor: colors.danger,
  },

  badgeText: {
    color: colors.white,
    fontSize: 8,
    fontWeight: "800",
  },
});