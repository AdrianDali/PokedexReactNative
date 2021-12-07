import { API_HOST } from "../utils/constants"

export async function getPokemonsApi(endpointUrl){
    console.log(endpointUrl);
    try{
        //limitar a 20 por pagina para que nuestra aplicacion no se rompa
        //construimos la url
        const url = `${API_HOST}/pokemon?limit=20&offset=0`
        //pedimos la peticions http
        const response = await fetch(endpointUrl ||url);
        //recuperamos los datos en un json
        const result = await response.json();
        //lo devolvemos
        return result;

    }
    catch(error){
        throw error;
    }
}

//funcion que se comunicara con el servidor 
export async function getPokemonDetailsByUrlApi(url){
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}


export async function getPokemonDetailsApi(id){
    try {
        const url = `${API_HOST}/pokemon/${id}`
        const response = await fetch(url);
        const result = await response.json()
        return result;
    } catch (error) {
        
    }
}