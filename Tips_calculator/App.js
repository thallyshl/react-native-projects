import React, { useState } from "react";
import { View, Text, SafeAreaView, Button, TextInput, StyleSheet } from "react-native";








// CSS em StyleSheet
const styles = StyleSheet.create (
  {
    Main: {
      flex: 1,
      alignItems: 'center',
      margin: 10,
      color: 'black',
    },
    Header: {
      fontSize: 30,
    },
    InputTip: {
      backgroundColor: '#EEE',
      width: '90%',
      fontSize: 20,
      borderStyle: 'solid',
      borderWidth: 1,
      paddingStart: 15,
      marginTop: 20,
      marginBottom: 20,
      borderRadius: 10,
    },
    ViewTip: {
      width: '70%',
      height: 100,
      borderWidth: 1,
      borderStyle: 'solid',
      marginTop: 100,
      marginBottom: 150,
      justifyContent: 'center',
      alignItems: 'center',
    },
    Btn: {
      margin: 50,
      flexDirection: 'row',
    },
    Result: {
      fontWeight: 'bold',
      fontSize: 20,

    }
  }

);





export default () => {

  const [ bill, setBill ] = useState ('');
  const [ porc, setPorc ] = useState ('');
  const [ tip, setTip ] = useState (0);
  
  const valueOfTip = () => {
    let totalBill = parseFloat(bill);
    let totalPorc = parseFloat(porc);
       
    if (totalBill >= 0 && totalPorc >= 0) {
      setTip ( totalBill * (totalPorc/100) );
    } else {
      alert ('Valores inválidos!')
    }
    
  }
  const clear = () => {
    setBill ('');
    setPorc ('');
    setTip (0);
  }
  

  return (
    <SafeAreaView style = {styles.Main}>
      <Text style = {styles.Header}> Calculadora de gorjeta </Text>
      <TextInput
        placeholder="Qual o valor da conta?"
        keyboardType="numeric"
        style = {styles.InputTip}
        onChangeText={n=>setBill(n)}    
      />
      <TextInput
        placeholder="Qual a porcentagem da gorjeta?"
        keyboardType="numeric"
        style = {styles.InputTip}
        onChangeText={p=>setPorc(p)}
      />
      { tip > 0 &&
        <View style = {styles.ViewTip}>
          <Text style = {styles.Result}>O valor da gorjeta é:</Text>
          <Text style = {styles.Result}>R$ {tip.toFixed(2)}</Text>
        </View>}
      <View style = {styles.Btn}>
        <Button
          title = 'Calcular'
          style = {styles.Btn}
          onPress={valueOfTip}
        />

        <Button
          title = 'Limpar'
          style = {styles.Btn}
          onPress={clear}
        />
      </View>  
      
    </SafeAreaView>
  );
}