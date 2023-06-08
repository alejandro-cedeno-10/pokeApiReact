import {Layout} from "../../componentes/layouts";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {pokeApi} from "../../api";
import {Button, Card, Grid, Text, Container, Image} from "@nextui-org/react";
import {getPokemonInfo, localFavorites} from "../../utils";
import confetti from 'canvas-confetti'
import {PokeAPIInterface} from "../../interfaces";

interface Props{
    pokemon: any;
}

export const PokemonByNamePage: NextPage<Props> = ({pokemon}) => {

    const [isInFavorites, setIsInfavorites] = useState(localFavorites.existInFavorites(pokemon.id));

    
    const onToogleFavorite = () =>{
        localFavorites.toogleFavorite(pokemon.id);
        setIsInfavorites(!isInFavorites);

        if(isInFavorites) return;

        confetti({
            zIndex: 999,
            particleCount:100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0,
            }
        })

    }


    return(
        <Layout title={ pokemon.name } img={pokemon.sprites.other?.dream_world.front_default}>

            <Grid.Container css={{marginTop: '5px'}} gap={2}>
                <Grid xs={12} sm={4} >
                    <Card isHoverable={true} css={{
                        padding:'30px'
                    }}>
                        <Card.Body>
                            <Card.Image
                              src={pokemon.sprites.other?.dream_world.front_default}
                              alt={ pokemon.name }
                              width="100%"
                              height={200}
                            >
                            </Card.Image>
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{display:'flex', justifyContent:'space-between'}}>
                            <Text h1 transform='capitalize'>
                                {pokemon.name}
                            </Text>

                            <Button
                                color="gradient"
                                ghost={!isInFavorites}
                                onPress={onToogleFavorite}
                            >
                                { isInFavorites ? "En favoritos" : "Guardar en favoritos" }
                            </Button>


                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>
                                Sprites:
                            </Text>
                            <Container direction='row' display='flex' gap={0}>
                                <Image
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                                />

                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>



            </Grid.Container>

        </Layout>
    )
}


export const  getStaticPaths: GetStaticPaths = async(ctx) =>{


    const { data } = await pokeApi.get('/pokemon?limit=151');

    const pokemonNames: string[] = data.results.map(pokemon => pokemon.name)

    return{
        // paths:[
        //     {
        //         params: {id: '1'}
        //     },
        //     {
        //         params: {id: '2'}
        //     }
        // ],
        paths: pokemonNames.map( name => ({
            params: {
                name
            }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async({params}) =>{

    const {name} = params as { name: string }

    return{
        props:{
            pokemon: await getPokemonInfo(name)
        }
    }

}

export default  PokemonByNamePage;
