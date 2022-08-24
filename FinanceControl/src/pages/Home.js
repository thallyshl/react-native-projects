import React from "react";
import styled from "styled-components";
import { SafeAreaView, Text } from "react-native";
import Header from "../components/Header";
import Balance from "../components/Balance";

const Main = styled.SafeAreaView `
  
  background-color: #FAFAFA;
`;

const Title = styled.Text `
    font-size: 18px;
    margin: 14px 14px 0px 14px;
    font-weight: bold;
    color: black
`;

export default () => {
  return (
    <Main>
      <Header name = 'Thallys Henrique'/>
      <Balance income = '9.000' expense = '5.000'/>
      <Title>Últimas movimentações</Title>
    </Main>
  );
}