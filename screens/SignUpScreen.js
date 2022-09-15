import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Label, TextInput } from "react-native";

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Text>Please sign up to experience all features!</Text>
      <TextInput placeholder="Name"></TextInput>
      <TextInput placeholder="Email"></TextInput>
      <TextInput placeholder="Password"></TextInput>
      <Button title="Sign Up" />
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
