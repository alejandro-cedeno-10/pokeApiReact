// To parse this data:
//
//   import { Convert, PokeAPI } from "./file";
//
//   const pokeAPI = Convert.toPokeAPI(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface PokeAPIInterface {
    count:    number;
    next:     string;
    previous: string;
    results:  ResultPokemons[];
}

export interface ResultPokemons {
    name: string;
    url:  string;
    id: number,
    img: string
}

export interface ResultFavorites {
    name: string;
    url:  string;
    id: number,
    img: string
}
