import { IPokemon } from "@/interfaces";

interface IPokemonState {
    pokemonList: IPokemon[] | null;
}

export const initialStatePokemon: IPokemonState = {
    pokemonList: [] as IPokemon[],
};
