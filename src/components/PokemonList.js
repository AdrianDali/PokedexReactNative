import React from "react";
//platform es para saber el sistema operativo en el que se esta ejecutando
import { StyleSheet, Text, FlatList,ActivityIndicator, Platform } from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props;
 //console.log(pokemons.type)
 const loadMore = () => {
   loadPokemons();
 }
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
        <ActivityIndicator
        size= "large"
        style={styles.spinner}
        color="#aeaeae"
        />)
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    //para hacer cosas dependiendo del sistema operativo 
    marginTop: Platform.OS === 'android' ? 0: 0
    
  },
  spinner:{
    marginTop:20,
    marginBottom:60,
    marginBottom: Platform.OS === 'android' ? 90:60

  }

});