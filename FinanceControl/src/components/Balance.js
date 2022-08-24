import React from "react";
import { View, TouchableOpacity } from "react-native";
import { StatusBar } from "react-native";
import styled from "styled-components";
import Icon from 'react-native-vector-icons/FontAwesome';


const Container = styled.View `
    background-color: white;
    flex-direction: row;
    justify-content: space-between;
    padding: 22px 18px 22px 18px;
    margin: -24px 14px 0px 14px;
    border-radius: 4px;
    z-index: 99;

`;

const Item = styled.View `
    
`

const Itemtitle = styled.Text `
    font-size: 20px;
    color: #DADADA;
`;

const Content = styled.View `
    flex-direction: row;
    align-itens: center;
`;

const CurrencySymbol = styled.Text `
    color: #DADADA;
    margin: 0px 6px 0px 0px;
`;

const BalanceIncomes = styled.Text `
    font-size: 22px;
    color: #2ecc71; 
    
`;

const BalanceExpenses = styled.Text `
    font-size: 22px;
    color: #e74c3c; 
        
`;


export default (props) => {
    return (
        <Container>
            <>
                <Item>
                    <Itemtitle>
                        Saldo
                    </Itemtitle>
                    <Content>
                        <CurrencySymbol>R$</CurrencySymbol>
                        <BalanceIncomes>{props.income}</BalanceIncomes>
                    </Content>
                </Item>

                <Item>
                    <Itemtitle>
                        Gastos
                    </Itemtitle>
                    <Content>
                        <CurrencySymbol>R$</CurrencySymbol>
                        <BalanceExpenses>{props.expense}</BalanceExpenses>
                    </Content>
                </Item>
            </>
        </Container>
    );
}