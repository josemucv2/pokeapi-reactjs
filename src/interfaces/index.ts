export interface IPokemon {
    name: string;
    url: string;
    abilities: IAbilityInfo[];
    sprites: { front_default: string };
}

export interface IAbility {
    name: string;
}

export interface IAbilityInfo {
    ability: IAbility;
}

export interface IHabilities {
    abilities: IAbility[];
    name: string;
    sprites: { front_default: string };
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