export interface PokemonI {

    name: string,
    url: string,
    status: any,

}

export interface PokemonResultI {

    count: number,
    next: string
    previous: null,
    results: any,
    url: string,
    status: any,
    name: string,

}

// Como a API retorna um n signficativo de dados, alguns deles ainda estão tipados como any
export interface PokemonDetailsI
  {
    abilities: any,
    names: any,
    base_experience: number,
    forms: any,
    game_indices: any,
    height: number,
    held_items: any,
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    move: any,
    name: string,
    order: number,
    past_types: any,
    species: any,
    sprites: any,
    versions: any,
    stats: any,
    types: any,
}
