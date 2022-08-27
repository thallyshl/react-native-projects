import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";
import Movies from "../pages/Movies";

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator
        screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTitleStyle: {
                color: 'white'
            }
        }}
        
        >
            <MainStack.Screen
                name = "Home"
                component = {Login}
            />
            <MainStack.Screen
                name="Cartaz"
                component={Movies}
            />
        </MainStack.Navigator>
    );
    }