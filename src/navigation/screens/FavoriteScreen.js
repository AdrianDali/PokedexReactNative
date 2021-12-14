import React, { useState, useEffect, useCallback } from "react";
import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonDetailsByUrlApi, getPokemonsFavoriteApi } from "../../api/favorite";
import useAuth from "../../hooks/useAuth";
import {getPokemonDetailsApi} from "../../api/pokemon"
import PokemonList from "../../components/PokemonList";
import {useFocusEffect} from "@react-navigation/native"

export default function Favorite() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  console.log(pokemons);
  //use effect que ejecutara la peticion http cada vez que auth(secion) sean modificados

  useFocusEffect(
    useCallback(() => {
        if (auth) {
          (async () => {
            const response = await getPokemonsFavoriteApi();
            const pokemonsArray = [];
            console.log(response);
            //bucle asincrono debuelve cada una de las urls
            for await (const id of response) {
              //console.log(pokemon.url)
              const pokemonDetails = await getPokemonDetailsApi(id);
              pokemonsArray.push({
                id: pokemonDetails.id,
                name: pokemonDetails.name,
                type: pokemonDetails.types[0].type.name,
                order: pokemonDetails.order,
                image:
                  pokemonDetails.sprites.other["official-artwork"].front_default,
              });
            }
            setPokemons(pokemonsArray);
          })();
        }
      }, [auth])
  )


 

  return !auth ? (
     <Text>Usuario no logeado</Text>
    ) : (
     <PokemonList pokemons={pokemons}/>
    );
}
