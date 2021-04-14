import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "theme-ui-native";

export const HomeScreen = () => {
  const { sx } = useTheme();
  return (
    <View>
      <Text style={sx({ color: "text", fontSize: 4 })}>Hello world</Text>
    </View>
  );
};
