//use state para guardar estados y cuando se cambie se repinte
//use effect para crear un efecto el efecto 
// se ejecuta cuando se monta el componente
import React,{useState,useEffect} from 'react'
import { Text,StyleSheet } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { PickerItem } from 'react-native/Libraries/Components/Picker/Picker';
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../../api/pokemon';
import PokemonList from '../../components/PokemonList';
export default function Pokedex() {
    const [pokemons, setPokemons] = useState([])//inicializado con array

    const [nextUrl, setNextUrl] = useState(null)
    //console.log("pokemons ---> ", pokemons);
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
            const response = await getPokemonsApi(nextUrl);
            //estamos guardando la url
            setNextUrl(response.next)
            console.log(response);
            const pokemonsArray = [];
            //bucle asincrono debuelve cada una de las urls 
            for await(const pokemon of response.results) {
                //console.log(pokemon.url)
                const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url)
                pokemonsArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    image: pokemonDetails.sprites.other['official-artwork'].front_default

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
        

            <PokemonList pokemons = {pokemons} loadPokemons={loadPokemons} isNext={nextUrl} />
        </SafeAreaView>
    )
}
