import React from "react";
import { Text, SafeAreaView, StyleSheet, TextInput, View, Button } from 'react-native';
import { useState } from 'react';
import Login from './componentes/Login';

/*const Hello = ({frase}) => {
  return (
      <Text style = {styles.Text}>{frase}</Text>
  );
}*/

//treinar useState com Input
const User = () => {
  const [ name, setName ] = useState ('user!');
  const [ nameQuadrado, setNameQuadrado ] = useState (false);
  function handleClick() {
    setNameQuadrado(!nameQuadrado);
  }

  return (
    <View>
      <>
        <Text style = {styles.Text}>Hello, {name}</Text>
        <TextInput style = {styles.Input} onChangeText={texto => setName(texto)}/>
        <Button style = {styles.Btn} title = {nameQuadrado ? 'Ocultar nome!' : 'Mostrar nome!'} onPress={handleClick}/>
        {nameQuadrado == true &&
          <View style = {styles.VQuadrado}>
           <Text style = {styles.Text}>Olá, {name}</Text>
         </View>
        }
      </>
    </View>
    
  );
}


// CSS com StyleSheet
const styles = StyleSheet.create (
  { 
    Main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    Text: {
      fontSize: 50,
      color: 'red',
    },
    Input: {
      width: 200,
      height: 40,
      borderBottomColor: '#000',
      borderWidth: 1,
      fontSize: 20,
      margin: 20,
    },
    Btn: {

    },
    VQuadrado: {
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 3,
      borderBottomColor: 'black',
      width: 300,
      height: 300,
      borderStyle: "dashed",
      marginTop: 30,
    }
  }
)

export default () => {
  return (
    <SafeAreaView style = {styles.Main}>
      <User/>
    </SafeAreaView>
  );
}