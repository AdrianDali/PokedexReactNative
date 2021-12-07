import React ,{useState,useEffect}from 'react'
import { View, Text } from 'react-native'
import { getPokemonDetailsApi } from '../../api/pokemon';
export default function Pokemon(props) {
    //doble destructuring
    const {navigation, route : {params}} = props;
    const [pokemon, setPokemon] = useState(null)
    //cada vez que params sea modificado se ejecutara nuestro hook use effect
    useEffect(() => {
        (async () =>{
            try {
                const response = await getPokemonDetailsApi(params.id)
                console.log(response);
                setPokemon(response)
            } catch (error) {
                navigation.goBack();
            }
        })()
    }, [params])
    console.log(params.id);

    if(!pokemon )return null;

    return (
        <View>
            <Text>{pokemon.name}</Text>
        </View>
    )
}
