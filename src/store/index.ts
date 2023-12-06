// index.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { pokemonListReducers } from './pokemons/reducers';
import {IPokemon} from '@/interfaces'

import { thunk } from 'redux-thunk';

export interface IRootState {
  pokemons: {
    pokemonList: IPokemon[];
  };
}

const rootReducer = combineReducers({
    pokemons: pokemonListReducers,
});

export const store = configureStore({
  reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),

});


export type AppDispatch = typeof store.dispatch;
