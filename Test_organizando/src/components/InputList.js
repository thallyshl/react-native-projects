import React, { useState } from "react";
import { 
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";

export default (props) => {

    const [ item, setItem ] = useState ('');

    const handleSubmit = () => {
        if (item.trim () != '') {
            let itens = [...props.itens];
            itens.push ({id: '', task:item});
            props.setItens (itens);
            setItem ('');
        } else {
            alert('Campo vazio!')
        }; 
    }

    return (
        <View style={styles.Main}>
            <TextInput 
                style={styles.MainText}
                placeholder='Digite para adicionar'
                value={item}
                onChangeText={e=>setItem(e)}
                onSubmitEditing={handleSubmit}
                returnKeyType='send'
            />
            <TouchableOpacity
                onPress={handleSubmit}
                style = {styles.Btn} activeOpacity={0.3}
            >
                <Text style={styles.BtnText}>Adicionar item!</Text>
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create (
    {
        Main: {
            backgroundColor: 'white',
            height: 50,
            width: '90%',
            paddingStart: 10,
            margin: 30,
            borderRadius: 10,
            borderWidth: 1,
        },
        MainText: {
            fontSize: 20,
            fontWeight: '500',
        },
        Btn: {
            margin: 30,
            backgroundColor: 'black',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
        },
        BtnText: {
            color: 'white',
            fontSize: 20,
        }
    }
)