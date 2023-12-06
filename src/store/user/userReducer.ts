// userReducers.ts
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { initialStateUser } from './userState';
import { setToken, setUser } from './userAction';
import { IUser } from '@/interfaces';


export const userAuthReducer = createReducer(initialStateUser, (builder) => {
  builder
    .addCase(setToken, (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    })
    .addCase(setUser, (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    });
});

