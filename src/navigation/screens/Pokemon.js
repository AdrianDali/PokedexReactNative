import React ,{useState,useEffect}from 'react'
import { ScrollView, Text } from 'react-native'
import { getPokemonDetailsApi } from '../../api/pokemon';
import Header from '../../components/Pokemon/Header';
import Type from '../../components/Pokemon/Type';
import Stats from '../../components/Pokemon/Stats';
import  Icon from 'react-native-vector-icons/FontAwesome5';
import Favorite from '../../components/Pokemon/Favorite'; 
import useAuth from '../../hooks/useAuth';


export default function Pokemon(props) {
    //doble destructuring
    const {navigation, route : {params}} = props;
    const [pokemon, setPokemon] = useState(null)
    const {auth} = useAuth();
    
    //cada vez que cambiemos de navegacion o de parametros
    // se ejecutara este use effect
    useEffect(() => {
        navigation.setOptions({
            //                           auth && <Favorite/>   
            //modificar header right     (auth  ? <Favorite/> : undefined)
            headerRight: () => (auth  ? <Favorite id={pokemon?.id}/> : undefined),
            headerLeft: () => <Icon name="arrow-left" color="#fff" size={20}
            style={{marginLeft: 20}}
            onPress={navigation.goBack}/>
        })
    },[navigation, params, pokemon])

    
    //console.log("POKEEE" +pokemon.types.type)
    //cada vez que params sea modificado se ejecutara nuestro hook use effect
    useEffect(() => {
        (async () =>{
            try {
                const response = await getPokemonDetailsApi(params.id)
                //console.log(response);
                setPokemon(response)
            } catch (error) {
                navigation.goBack();
            }
        })()
    }, [params])
    //console.log(params.id);

    if(!pokemon )return null;

    return (
        <ScrollView>
            <Header 
            name = {pokemon.name} 
            order={pokemon.order}
            image = {pokemon.sprites.other["official-artwork"].front_default}
            type = {pokemon.types[0].type.name}/>
            <Type types={pokemon.types}/>
            <Stats stats= {pokemon.stats}/>
        </ScrollView>
    )
}
