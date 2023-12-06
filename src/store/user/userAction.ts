// userActions.ts
import { createAction } from '@reduxjs/toolkit';
import { IUser } from '@/interfaces';
import { SET_TOKEN, SET_USER } from './userTypes'

export const setToken = createAction<string>(SET_TOKEN);
export const setUser = createAction<IUser | null>(SET_USER);
