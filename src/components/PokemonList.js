import React from 'react'
import { Text, FlatList,StyleSheet } from 'react-native'

export default function PokemonList(props) {
    //destructuracion 
    const {pokemons } = props; 
    return (
        <FlatList
        data = {pokemons }
        numColumns = {2}
        showsVerticalScrollIndicator = {false}
        keyExtractor = {(pokemon) => String(pokemon.id)}
        renderItem = {({item}) => {
            <Text>
                {item.name}
            </Text>
        }
    
    }
    contentContainerStyle ={styles.FlatListContentContainer}
    />)
}

const styles = StyleSheet.create({
    FlatListContentContainer :{ 
        paddingHorizontal: 5
    }
})