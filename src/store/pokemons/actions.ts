import { PayloadAction } from '@reduxjs/toolkit';
import { SET_POKEMONS } from './types';
import { IPokemon } from '@/interfaces';

export const setPokemons = (payload: IPokemon[]): PayloadAction<IPokemon[]> => ({
  type: SET_POKEMONS,
  payload,
});
