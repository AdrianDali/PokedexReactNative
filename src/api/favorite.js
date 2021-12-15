import  AsyncStorage  from "@react-native-async-storage/async-storage";
import {includes,pull} from "lodash"
import {FAVORITE_STORAGE} from "../utils/constants"

//obtener pokemons de la lista de favoritos
export async function getPokemonsFavoriteApi() {
    try {
      const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
      return JSON.parse(response || "[]");
      // return response ? JSON.parse(response) : [];
    } catch (error) {
      throw error;
    }
  }

//funcion anadir pokemon a favoritos 
export async function addPokemonFavoriteApi(id){
    try{
        const favorites = await getPokemonsFavoriteApi();
        //se agrega
        favorites.push(id);
        await AsyncStorage.setItem(FAVORITE_STORAGE,JSON.stringify(favorites))
    }catch(error){
        throw(error)
    }
}

export async function isPokemonFavoriteApi(id){
    try {
        const response = await getPokemonsFavoriteApi();
        //busca dentro de response el id que se manda
        return includes(response, id)
    } catch (error) {
        throw(error)
    }
}

export async function removePokemonFavoriteApi(id){
    try {
        const favorites = await getPokemonsFavoriteApi();
        //pull para borrar
        const newFavorites = pull(favorites, id);
        //stringigly transgorma 
        await AsyncStorage.setItem(FAVORITE_STORAGE,JSON.stringify(newFavorites))
    } catch (error) {
        throw(error)
    }
}