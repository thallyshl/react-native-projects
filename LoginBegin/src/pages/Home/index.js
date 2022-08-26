import React, { useState } from 'react';
import styled from 'styled-components/native';
import { 
    Main, 
    Header,
    Button,
    Enter,
    Show,
    Info,
    Result,
} from './styles'

export default () => {

    const [ email, setEmail ] = useState ('');
    const [ password, setPassword ] = useState ('');
    const [ status, setStatus ] = useState ('');
    const [ show, setShow ] = useState (false);
    const handleVerifyLogin = async () => {
        setStatus('');
        setShow(false);
        const req = await fetch ('https://api.b7web.com.br/loginsimples/', {
            method: 'POST',
            body: JSON.stringify ({email, password}),
            headers: {
                'Content-type': 'application/json'
            }        
        });
        const json = await req.json();
        if (json.status == 'ok') {
            setStatus ('ACESSO LIBERADO!');
            setShow (true);
        } else {
            setStatus ('ACESSO NEGADO!');
            setShow (false);
        }
    }

    return (
        <Main>
            <Header>Desconto!</Header>
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
                title = "Verificar"
                onPress = {handleVerifyLogin}
            />
            
            <Info>
                {status}
            </Info>
                

            {show &&
                <Show>
                    <Result>THALLYS</Result>
                </Show>
            }
            
        </Main>
          

  );
}

