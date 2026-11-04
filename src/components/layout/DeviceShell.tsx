import { StyleSheet, View } from "react-native";

type DeviceShellProps = {
  children: React.ReactNode;
};

export default function DeviceShell({
  children,
}: DeviceShellProps) {
  return (
    <View style={styles.desktopStage}>
      <View style={styles.device}>
        <View style={styles.dynamicIsland} />

        <View style={styles.screen}>
          {children}
        </View>

        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  desktopStage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0B1220",
  },

  device: {
    width: 390,
    height: 844,
    overflow: "hidden",
    backgroundColor: "#000000",
    borderRadius: 42,
    padding: 8,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.35,
    shadowRadius: 30,
    elevation: 20,
  },

  dynamicIsland: {
    position: "absolute",
    zIndex: 10,
    top: 16,
    left: "50%",
    width: 120,
    height: 28,
    marginLeft: -60,
    borderRadius: 20,
    backgroundColor: "#000000",
  },

  screen: {
    flex: 1,
    overflow: "hidden",
    borderRadius: 36,
    backgroundColor: "#F8FAFC",
  },

  homeIndicator: {
    position: "absolute",
    zIndex: 10,
    bottom: 14,
    left: "50%",
    width: 110,
    height: 5,
    marginLeft: -55,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
  },
});