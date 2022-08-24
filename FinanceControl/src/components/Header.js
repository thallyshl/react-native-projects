import React from "react";
import { View, TouchableOpacity } from "react-native";
import { StatusBar } from "react-native";
import styled from "styled-components";
import Icon from 'react-native-vector-icons/FontAwesome';

const Container = styled.View `
    background-color: #8000ff;
    padding: 22px 16px 44px 16px;
    flex-direction: row;
`;
const Content = styled.View `
    flex:1;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;
const Name = styled.Text `
    font-size: 18px;
    color: white;
    font-weight: bold;
`;
const BtnTouchable = styled.TouchableOpacity `
    width: 44px;
    height: 44px;
    background-color: white;
    opacity: 0.5;
    align-items: center;
    justify-content: center;
    border-radius: 22px
`;

/*Verifica se statusBarHeight está ativado (TRUE-apenas para Android)
const statusBarHeight = StatusBar.currentHeight ? 500 : 64; 
NÃO FUNCIONOU
*/


export default ({name}) => {
    return (
        <Container >
            <Content>
                <Name>{name}</Name>
                <BtnTouchable activeOpacity = {0.6}>
                    <Icon name="user" size={27} color="#fff" />
                </BtnTouchable>
            </Content>
        </Container>
    );
}