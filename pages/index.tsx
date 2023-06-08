// import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import {Button, Card, Grid, Row, Text} from "@nextui-org/react";
import {Layout} from "../componentes/layouts";
import {GetStaticProps, NextPage} from "next";
import {pokeApi} from "../api";
import {PokeAPIInterface, ResultPokemons} from "../interfaces";
import {PokemonCard} from "../componentes/pokemon";
import {useRouter} from "next/router";

const inter = Inter({ subsets: ['latin'] })

interface  Props{
    pokemons: ResultPokemons[]
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

const Index: NextPage<Props> =  ({pokemons}) =>  {


  return (
      <Layout title={'Pokedex de Dylan'} img={`${origin}/img/pikachu.jpg`}>

          <Grid.Container gap={ 2 } justify='flex-start'>
              {
                  pokemons.map((pokemon) =>{
                      return(
                        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                      )
                  })
              }

          </Grid.Container>

      </Layout>
  )
}

export const getStaticProps: GetStaticProps = async(ctx) =>{

    // const { data } = await pokeApi.get<PokeAPIInterface>('/pokemon?limit=1008');
    const { data } = await pokeApi.get<PokeAPIInterface>('/pokemon?limit=151');

    const pokemons: ResultPokemons[] = data.results.map(
        (poke, i) => ({
         ...poke,
         id: i +1,
         img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1 }.png`
               // img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i +1 }.svg`
        })
    )

    return{
        props:{
            pokemons: pokemons
        }
    }

}


export default  Index ;
