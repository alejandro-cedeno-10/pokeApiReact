import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import {Navbar} from "../ui";

interface Props extends PropsWithChildren {
    title?: string;
    img?: string;
}

export const Layout: FC<Props> = ({ title, img, children }) => {
    return (
        <>
            <Head>
                <title>{ title || 'PokemonApp - Dylan' }</title>
                <meta name="author" content="Erick Cinco" />
                <meta name="description" content={`Información sobre el ${title}`} />
                <meta name="keywords" content={` pokemon, pokedex ${title}`} />

                <meta property="og:title" content={`Informacion sobre${title}`}/>
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={img} />

            </Head>

            <Navbar />

            <main>
                { children }
            </main>
        </>
    )
}
