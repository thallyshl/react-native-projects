import React, { useState } from "react";
import { View, Text, SafeView, StyleSheet } from "react-native";







// CSS em StyleSheet
const styles = StyleSheet.create (
    {
        Main: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: 'black',
            borderWidth: 1,
        }
    }
)






export default () => {
    return (
        <SafeView style = {styles.Main}>
            <Text>'Oi'</Text>
        </SafeView>
    );
}