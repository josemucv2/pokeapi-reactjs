import { createAction } from '@reduxjs/toolkit';
import { SET_POKEMONS } from './pokemonTypes';
import { IPokemon } from '@/interfaces';

export const setPokemons = createAction<IPokemon[] | null>(SET_POKEMONS)
