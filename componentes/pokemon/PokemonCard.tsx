import {Card, Grid, Row, Text} from "@nextui-org/react";
import {FC} from "react";
import {PokeAPIInterface, ResultPokemons} from "../../interfaces";
import {router} from "next/client";
import {useRouter} from "next/router";
import {GetStaticProps} from "next";
import {pokeApi} from "../../api";

interface  Props{
    pokemon: ResultPokemons
}

export const PokemonCard: FC<Props> = ({pokemon: {id , img, name } }) =>{

    const router = useRouter();

    const onClick = () => {
        router.push(`/name/${name}`);
    }


    return(
        <Grid xs={ 6 } md={ 2 } xl={ 1 } key={id}>
            <Card isHoverable={true} isPressable={true}
            onClick={onClick}
            >
                <Card.Body css={{p:1}}>
                    <Card.Image
                        src={img}
                        width="100%"
                        height={200}
                    >
                    </Card.Image>
                    <Card.Footer isBlurred={true}>
                        <Row justify='space-between'>
                            <Text transform='capitalize'>{ name }</Text>
                            <Text> { id } </Text>
                        </Row>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Grid>
    )
}




