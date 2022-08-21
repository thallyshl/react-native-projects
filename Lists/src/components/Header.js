import React from "react";
import { 
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
} from "react-native";



export default () => {
    return (
        <View style = {styles.HeaderMain}>
            <Text style={styles.Text}>Testando lista</Text>
        </View>
    );
}


const styles = StyleSheet.create (
    {
        HeaderMain: {
            width: '95%',
            height: 60,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            margin: 10,
        },
        Text: {
            fontWeight: 'bold',
            fontSize: 30,
            color: 'black',
        }
    }
)