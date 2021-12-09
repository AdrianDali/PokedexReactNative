import React from 'react'
import { View, Text } from 'react-native'
import AccountScreen from './screens/AccountScreen'
import {createStackNavigator} from "@react-navigation/stack"

const Stack = createStackNavigator();
export default function AccountNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name = 'Account'
            component = {AccountScreen}
            options = {{title: "Mi cuenta"}}
            />
        </Stack.Navigator>
    )
}
