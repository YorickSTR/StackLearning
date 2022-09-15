import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function LoggedInScreen({ navigation, route }) {
  let name = route.params.name;
  return (
    <View style={styles.container}>
      <Text>Hallo {name}, welkom.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
