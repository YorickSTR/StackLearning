import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import styled from "styled-components/native";

const Drawer = createDrawerNavigator();

export default function App({ navigation, route }) {
  function Profile() {
    return (
      <View>
        <DivSTR>
          <Title>Welcome, Guest.</Title>
          <SubTextA>
            Because you're not registered you can't use our tools.
          </SubTextA>
          <TitleA margin>What do we offer?</TitleA>
          <TitleB margin> -BMI Calculator</TitleB>
          <SubText>See if you have a healthy weight.</SubText>
        </DivSTR>
      </View>
    );
  }

  function MyInfo() {
    return (
      <View>
        <Text>You don't have saved info since you don't have an account.</Text>
      </View>
    );
  }
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="My Info" component={MyInfo} />
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
