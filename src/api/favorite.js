import  AsyncStorage  from "@react-native-async-storage/async-storage";
import {includes,pull} from "lodash"
import {FAVORITE_STORAGE} from "../utils/constants"

//obtener pokemons de la lista de favoritos
export async function getPokemonsFavoriteApi(){
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return response;
    } catch (error) {
        throw(error)
    }
}

//funcion anadir pokemon a favoritos 
export async function addPokemonFavoriteApi(id){
    try{
        const favorites =[];
        //se agrega
        favorites.push(id);
        await AsyncStorage.setItem(FAVORITE_STORAGE,JSON.stringify(favorites))
    }catch(error){
        throw(error)
    }
}

