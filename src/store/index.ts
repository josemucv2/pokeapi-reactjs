import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { pokemonReducers } from './pokemons/pokemonReducers';
import { IPokemon, IUser } from '@/interfaces';
import { userAuthReducer } from './user/userReducer';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


export interface IRootState {
  pokemons: {
    pokemonList: IPokemon[];
  };
  user: {
    token: string;
    user: IUser;
  };
}

const persistConfig = {
  key: 'root',
  storage, 
  whitelist: ['user'], 
};

const rootReducer = combineReducers({
  pokemons: pokemonReducers,
  user: userAuthReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export default { store, persistor };
