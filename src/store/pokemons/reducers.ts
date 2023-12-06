import { initialStatePokemon } from "./state";
import { SET_POKEMONS } from "./types";
import { IPokemon } from '@/interfaces'

interface SetPokemonsAction {
  type: typeof SET_POKEMONS;
  payload: IPokemon
}


export const pokemonListReducers = (state = initialStatePokemon, action: SetPokemonsAction) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemonList: action.payload,
      };
    default:
      return state;
  }
};
