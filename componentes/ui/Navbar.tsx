import {Spacer, Text, theme, Link} from "@nextui-org/react";
import Image from "next/image";
import NextLink from 'next/link';

export const Navbar = () => {

    return(
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: theme.colors.gray900.value,
        }}>

            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
                alt="Icono de la app"
                width="70"
                height="70"
            />



            <NextLink href='/' passHref >
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Text color="white" h2>P</Text>
                    <Text color='white' h3>odekex </Text>
                    <Text color='white' css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                        marginLeft: "10px"
                    }} weight="bold" h2>Dylan Moran</Text>
                </div>
               </NextLink>


            <Spacer css={{flex: 1}}/>

            <NextLink href='/favorites' passHref>
                <Text color='white' >Favoritos</Text>
            </NextLink>


        </div>
    )
}
