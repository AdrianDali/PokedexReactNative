import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-vector-icons/FontAwesome5'

export default function Favorite() {
    
    const addFavorite = () => {
        console.log("Anadir a favoritos ")
    }

    return (
        <Icon name="heart" color="#fff" size={20} onPress={addFavorite} style={{marginRight: 20}}/>
    )
}

const styles = StyleSheet.create({})
