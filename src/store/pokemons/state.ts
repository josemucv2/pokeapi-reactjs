import { IPokemon } from "@/interfaces";

interface PokemonState {
    pokemonList: IPokemon[];
}

export const initialStatePokemon: PokemonState = {
    pokemonList: [] as IPokemon[], // Inicializado como un arreglo vacío de IPokemon
};
