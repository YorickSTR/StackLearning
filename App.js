import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import HomeScreen from "./screens/HomeScreen";
import LoggedInScreen from "./screens/LoggedInScreen";
import GuestScreen from "./screens/GuestScreen";

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
          name="UseGuest"
          component={GuestScreen}
          options={{ title: "Logged in as Guest" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
