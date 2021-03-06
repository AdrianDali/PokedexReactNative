import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack"
import FavoriteScreen from './screens/FavoriteScreen';
import PokemonScreen from "./screens/Pokemon"

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Favorite" component={FavoriteScreen}
            options={{title:"Favoritos"}}/>
            <Stack.Screen name="Pokemon" component={PokemonScreen}
            options={{title:"", headerTransparent :true}}/>
        </Stack.Navigator>
    )
}
