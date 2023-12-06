import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { initialStatePokemon } from "./pokemonState";
import { IPokemon } from '@/interfaces'
import { setPokemons } from './pokemonActions'

export const pokemonReducers = createReducer(initialStatePokemon, (builder) => {
  builder
  .addCase(setPokemons, (state, action: PayloadAction<IPokemon[] | null>) =>{
     state.pokemonList = action.payload
  })
})
