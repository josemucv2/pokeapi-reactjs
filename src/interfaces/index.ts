export interface IPokemon {
    name: string;
    url: string;
    abilities: IHabilities[];
    sprites: { front_default: string };
}

export interface IHabilities {
    ability: []
    name: string,
}

export interface IUser {
    id?: number,
    email: string,
    password: string,
    avatar?: string,
    name?: string,
    lastName?: string,
    pokemonCount?: number,
    battlesWon?: number,
    battlesLost?: number,
    mainPokemon?: string
}