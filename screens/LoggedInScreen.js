import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styled from "styled-components";
import BmiCalculator from "./components/BmiCalculator";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App({ navigation, route }) {
  let name = route.params.name;
  function Profile() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Welcome, {name}</Text>
      </View>
    );
  }

  function MyInfo() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Name: {name}</Text>
      </View>
    );
  }

  function Tools() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <DivSTR>
          <TitleB>Welcome, user.</TitleB>
        </DivSTR>
      </View>
    );
  }
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="My Info" component={MyInfo} />
      <Drawer.Screen name="Tools" component={Tools} />
    </Drawer.Navigator>
  );
}

const Title = styled.Text`
  font-size: 30px;
  font-weight: 200;
`;

const TitleA = styled.Text`
  font-size: 25px;
  font-weight: 200;
  margin-top: ${(props) => (props.margin ? "20px" : "0px")};
`;
const TitleB = styled.Text`
  font-size: 20px;
  font-weight: 200;
  margin-top: ${(props) => (props.margin ? "20px" : "0px")};
`;

const TextInputSTR = styled.TextInput`
  padding: 10px;
  margin-top: 10px;
  background-color: white;
  border-radius: 5px;
  width: ${(props) => (props.wide ? "100%" : "300px")};
`;

const SubText = styled.Text`
  font-size: 17px;
  color: black;
  margin-top: ${(props) => (props.margin ? "20px" : "0px")};
  font-weight: 200;
`;

const SubTextA = styled.Text`
  padding: 20px;
  font-size: 17px;
  color: black;
  font-weight: 200;
`;
const DivSTR = styled.View`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  margin: 20px;
  align-items: center;
  text-align: left;
`;

const InputButtonField = styled.View`
  background-color: #f8f8f8;
  border-radius: 10px;
  align-items: center;
  text-align: left;
  padding: 15px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 40px;
  padding-bottom: 0;
`;
