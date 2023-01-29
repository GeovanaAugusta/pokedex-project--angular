import { types } from "joi"

export interface PokemonI {

    name: string,
    url: string,
    status: any,

}

export interface PokemonResultI {

    count: number,
    next: string
    previous: null,
    results: any[],
    url: string,
    status: any,
    name: string,

}
