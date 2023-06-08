import {Card, Grid} from "@nextui-org/react";
import {router} from "next/client";
import {useRouter} from "next/router";
import {ResultFavorites, ResultPokemons} from "../../interfaces";
import {FC} from "react";

interface  Props{
    favoritePokemon: Number[]
}


export const Favorites: FC<Props> = ({favoritePokemon}) =>{

    const router = useRouter();

    const onFavoriteClicked= (id: any) =>{
        router.push(`/pokemon/${id}`)
    }

    return(
        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
                favoritePokemon.map(id =>(
                    <Grid xs={6} sm={3} md={2} xl={1} onClick={ event => onFavoriteClicked(id)}>
                        <Card isHoverable={true} isPressable={true} css={{
                            padding:10
                        }}>
                            <Card.Image
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                                width={'100%'}
                                height={140}
                            />

                        </Card>
                    </Grid>
                ))
            }
        </Grid.Container>
    )
}
