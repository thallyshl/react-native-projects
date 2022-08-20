import React, { useStates } from "react";
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
      borderRadius: 10,
    }
  }

);





export default () => {
  return (
    <SafeAreaView style = {styles.Main}>
      <Text style = {styles.Header}> Calculadora de gorjeta </Text>
      <TextInput placeholder="Qual o valor da conta?" keyboardType="numeric" style = {styles.InputTip}  />
    </SafeAreaView>
  );
}