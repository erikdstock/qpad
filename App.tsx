import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "theme-ui-native";
import { HomeScreen } from "./src/HomeScreen";
import { theme } from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <HomeScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
