import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import HomeScreen from "./screens/HomeScreen";
import LoggedInScreen from "./screens/LoggedInScreen";
import SignUpScreen from "./screens/SignUpScreen";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "FitSTRs" }}
        />
        <Stack.Screen
          name="LoggedIn"
          component={LoggedInScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: "Sign Up" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
