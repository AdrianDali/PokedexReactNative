//use state para guardar estados y cuando se cambie se repinte
//use effect para crear un efecto el efecto 
// se ejecuta cuando se monta el componente
import React,{useState,useEffect} from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsApi } from '../../api/pokemon';

export default function Pokedex() {
    //cuando el componente se monte se ejecutara una vez y nunca mas hasta que se monte
    useEffect(() => {
        //console.log("hola mundo")
        // '()()'  <--- es una funcion anonima autoejecutable
        (async() => {
            await loadPokemons();
        })()
    },[]);

    const loadPokemons = async() =>{
        try {
            const response = await getPokemonsApi();
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <SafeAreaView>
            <Text>pokedex</Text>
        </SafeAreaView>
    )
}
