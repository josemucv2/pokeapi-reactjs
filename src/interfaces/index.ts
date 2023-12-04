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
    email: string,
    password: string,
    avatar?: string,
    name?: string,
}