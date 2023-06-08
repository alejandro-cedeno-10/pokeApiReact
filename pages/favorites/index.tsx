import {Layout} from "../../componentes/layouts";
import {Container, Text, Image, Grid, Card} from "@nextui-org/react";
import {Favorites, NoFavorites} from "../../componentes/ui";
import {useEffect, useState} from "react";
import {localFavorites} from "../../utils";



const FavoritesPage = () =>{

    const [favoritePokemon, setFavoritePokemon] = useState<Number[]>([]);

    useEffect(()=>{

        setFavoritePokemon(localFavorites.pokemons())

    },[])

    return(
        <Layout title='Pokemons - Favoritos'>

            {
                favoritePokemon.length ===0
                ?(<NoFavorites />)
                :(<Favorites favoritePokemon={favoritePokemon}/>)
            }



        </Layout>
    )
}

export default FavoritesPage
