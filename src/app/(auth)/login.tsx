import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LocalFix</Text>

      <Text style={styles.subtitle}>
        Login Screen
      </Text>

      <Link href="/(auth)/register" style={styles.link}>
        Don't have an account? Register
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8FAFC",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 18,
  },
  link: {
    marginTop: 24,
    fontSize: 16,
    color: "#2563EB",
  },
});