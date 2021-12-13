import React, {useState,useEffect} from 'react'
import  FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import  FontAwesome from 'react-native-vector-icons/FontAwesome'
import { addPokemonFavoriteApi,getPokemonsFavoriteApi, isPokemonFavoriteApi, removePokemonFavoriteApi } from '../../api/favorite'

export default function Favorite(props ) {
    const {id} = props
    const [isFavorite, setIsFavorit] = useState(undefined)
    const [reloadCheck, setreloadCheck] = useState(false)

    const Icon = isFavorite ? FontAwesome : FontAwesome5
    useEffect(() => {
        (async  () => {
            try {
                const response = await isPokemonFavoriteApi(id)
                setIsFavorit(response)
            } catch (error) {
                setIsFavorit(false)
            }
        })()
    }, [id, reloadCheck])          

    const onReloadCheck = () => {
        setreloadCheck(prev => !prev)
    }
    
    const addFavorite = async () => {
        try {
            await addPokemonFavoriteApi(id)
            onReloadCheck()
        } catch (error) {
            console.log(error);
        }
        
    }

    const removeFavorite = async() =>{
        try {
            await removePokemonFavoriteApi(id)
            onReloadCheck()
        } catch (error) {
            throw(error)
        }
    }

    return (
        
        <Icon 
         name="heart" 
         color="#fff" 
         size={20} 
         onPress={isFavorite ? removeFavorite: addFavorite} 
         style={{marginRight: 20}}
        />
      
    )
}


