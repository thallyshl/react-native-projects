import React from 'react';
import styled from 'styled-components/native';


export const Main = styled.SafeAreaView `


    flex: 1;
    background-color: #333;
    padding: 20px;
`;

export const Header = styled.Text `
    font-size: 25px;
    color: white;
    text-align: center;
    margin-bottom: 30px;
`;

export const Button = styled.Button `

`;
export const Enter = styled.TextInput `

    height: 45px;
    border-radius: 5px;
    border: 1px solid black;
    font-size: 18px;
    margin-bottom: 20px;
    background-color: #555;
    padding: 0 10px 0 10px;
`;
export const Info = styled.Text `
    margin: 50px;
    font-size: 18px;
    text-align: center;
    color: white;
`;
export const Show = styled.View `
    background-color: white;
    border-radius: 5px;
    padding: 30px;
`;
export const Result = styled.Text `
    font-size: 40px;
    text-align: center;
    color: black;

`;
