//use state para guardar estados y cuando se cambie se repinte
//use effect para crear un efecto el efecto 
// se ejecuta cuando se monta el componente
import React,{useState,useEffect} from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../../api/pokemon';

export default function Pokedex() {
    const [pokemons, setPokemons] = useState([])//inicializado con array
    console.log("pokemons ---> ", pokemons);
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
            const pokemonsArray = [];
            //bucle asincrono debuelve cada una de las urls 
            for await(const pokemon of response.results) {
                //console.log(pokemon.url)
                const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url)
                pokemonsArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.types[0].name,
                    order: pokemonDetails.order,
                    imagen: pokemonDetails.sprites.other['official-artwork'].front_default

                })
            }
            setPokemons([...pokemons, ...pokemonsArray])
            //console.log(response)
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
