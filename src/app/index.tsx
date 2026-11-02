import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LocalFix</Text>

      <Text style={styles.subtitle}>
        Report. Track. Fix.
      </Text>

      <Text style={styles.description}>
        Your local civic issue reporting platform.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "600",
  },
  description: {
    marginTop: 8,
    fontSize: 15,
    textAlign: "center",
  },
});