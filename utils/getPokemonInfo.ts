import {pokeApi} from "../api";

export const getPokemonInfo = async (nameOrId: string) => {


    const { data } = await pokeApi.get<any>(`/pokemon/${ nameOrId }`);

    return  {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }


}
