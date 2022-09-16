import React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import styled from "styled-components/native";

export default function HomeScreen({ navigation, text }) {
  const [name, setText] = useState("");

  return (
    <View>
      <DivSTR>
        <Title>Welcome to FitSTRs.</Title>
        <SubText>Please login, sign up, or continue as guest.</SubText>
        {/* <TextInput>Wat is je naam?</TextInput> */}
        <InputButtonField>
          <SubText>Already have an account?</SubText>
          <TextInputSTR placeholder="Username"></TextInputSTR>
          <TextInputSTR placeholder="Password"></TextInputSTR>
          <Button
            title="Login"
            onPress={() => navigation.navigate("LoggedIn", { name: "Yorick" })}
          />
        </InputButtonField>
        <InputButtonField>
          <SubText>Don't have an account?</SubText>
          <TextInputSTR placeholder="Username"></TextInputSTR>
          <TextInputSTR placeholder="Password"></TextInputSTR>
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate("LoggedIn", { name: "Yorick" })}
          />
        </InputButtonField>
        <SubText margin onPress={() => navigation.navigate("UseGuest")}>
          Continue as guest
        </SubText>

        {/* <StatusBar style="auto" /> */}
      </DivSTR>
    </View>
  );
}

const Title = styled.Text`
  font-size: 30px;
  font-weight: 300;
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
  color: grey;
  margin-top: ${(props) => (props.margin ? "20px" : "0px")};
`;

const SubTextA = styled.Text`
  padding: 20px;
  font-size: 17px;
  color: grey;
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
