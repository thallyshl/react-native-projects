import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';
import Header from './src/components/Header';
import ListCard from './src/components/ListCard';
import InputList from './src/components/InputList';
import list from './src/components/list';


export default () => {

  const [ itens, setItens ] = useState (list)

  console.log('Finalmente');
  return (
    <SafeAreaView style = {styles.Main}>
      <>
        <Header/>
        <FlatList
            style={styles.Flat}
            data={itens}
            renderItem = {({item})=><ListCard data = {item} />}
            keyExtractor={(item)=>item.id}
            />
        <InputList itens={itens} setItens={setItens}/>        
      </>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create (
  {
    Main: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#CCC',
    },
    Flat: {
      borderStyle: 'solid',
      width: '90%',
      borderWidth: 2,
      maxHeight: '50%',
      borderRadius: 10,
    }
  }
)