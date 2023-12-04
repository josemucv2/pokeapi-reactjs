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