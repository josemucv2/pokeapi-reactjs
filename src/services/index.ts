import axios, { AxiosResponse } from 'axios';
import { IPokemon, IUser } from '@/interfaces';
import DataUser from './user.json'

const tokenSave = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzdWFyaW8iLCJwYXNzd29yZCI6ImNvbnRyYXNlbmExMjMifQ.UN7ze_klm1b1KKIjxQ5691-HkId9hsHP5sk4x_PmHx4"

export type CustomResponse<T> = AxiosResponse & {
  count: number,
  results: T[]
}

export const getPokemon = async (limit: number, offset: number): Promise<CustomResponse<IPokemon>> => {
  try {
    const response = await axios.get<CustomResponse<IPokemon>>(`${import.meta.env.VITE_BASE_URL}?limit=${limit}&offset=${offset}`);
    return response.data;
  } catch (error) {
    throw new Error('No se pudo obtener la lista de Pokémon');
  }
};

export const getPokemonById = async (url: string): Promise<void> => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('No se pudo obtener la información del Pokémon');
  }
};



export const loginServices = async (body: IUser) => {
  const user: IUser | undefined = DataUser.users.find((user) => user.email === body.email);

  console.log('pasa por el servicio, segundo')

  if (!user || user.password !== body.password) {
    throw new Error('Credenciales inválidas');
  }

  const token = tokenSave;

  return {
    token,
    user,
  };
};

