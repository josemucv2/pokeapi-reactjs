// index.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    // Puedes agregar más reducers aquí si tienes otros módulos
});

export const store = configureStore({
    reducer: rootReducer,
    // Otros middlewares, opciones, etc.
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
