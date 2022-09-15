import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <TextInput>Wat is je naam?</TextInput> */}
      <Button
        title="Login as Yorick"
        onPress={() => navigation.navigate("LoggedIn", { name: "Yorick" })}
      />
      <Button
        title="Login as Jan"
        onPress={() => navigation.navigate("LoggedIn", { name: "Jan" })}
      />
      <Text>Not your accounts?</Text>
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate("SignUp", { name: "Jan" })}
      />
      <StatusBar style="auto" />
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
