import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';


const Main = styled.SafeAreaView `
    flex: 1;
    background-color: #333;
    padding: 20px;
`;
const Header = styled.Text `
    font-size: 25px;
    color: white;
    text-align: center;
    margin-bottom: 30px;
`;
const Button = styled.Button `
`;
const Enter = styled.TextInput `
    height: 45px;
    border-radius: 5px;
    border: 1px solid black;
    font-size: 18px;
    margin-bottom: 20px;
    background-color: #555;
    padding: 0 10px 0 10px;
`;
                                                            
export default () => {

    const [ email, setEmail ] = useState ('');
    const [ password, setPassword ] = useState ('');
    const [ status, setStatus ] = useState ('');
    const [ show, setShow ] = useState (false);
    const navigationTeste = useNavigation();
    
    const handleVerifyLogin = async () => {
        //login: suporte@b7web.com.br
        //senha: 1234
        const req = await fetch ('https://api.b7web.com.br/loginsimples/', {
            method: 'POST',
            body: JSON.stringify ({email, password}),
            headers: {
                'Content-type': 'application/json'
            }        
        });
        const json = await req.json();
        if (json.status == 'ok') {
            navigationTeste.navigate('Cartaz');
        } else {
            alert ('ACESSO NEGADO!');
        }
    }

    return (
        <Main>
            <Header>Filmes!</Header>
            <Enter 
                placeholder = "Digite seu e-mail"
                value = {email}
                onChangeText = {(e) => setEmail(e)}
            />
            <Enter 
                placeholder = "Digite sua senha"
                value = {password}
                onChangeText = {(e) => setPassword(e)}
                secureTextEntry = {true}
            />
            <Button 
                title = "Entrar"
                onPress = {handleVerifyLogin}
            />
        </Main>
  );
}

