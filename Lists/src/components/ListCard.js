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
    FlatList,
} from "react-native";

export default (props) => {
    return (
        <View style={styles.Main}>
            <>
                <Text style={styles.Text}>{props.data.task}</Text>
            </>
        </View>
    );
}

// CSS com StyleSheet

const styles = StyleSheet.create (
    {
        Main: {
            backgroundColor: 'white',
            width: '95%',
            height: 50,
            padding: 10,
            margin: 10,
            borderRadius: 10,
        },
        Text: {
            fontSize: 20,
            fontWeight: '500',
            color: 'black',
        },
    }
)