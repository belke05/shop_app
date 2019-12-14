import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation/navigation_config";
import "react-native-gesture-handler";
import Provider from "./redux_config/store";

export default function App() {
  return (
    <Provider>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
