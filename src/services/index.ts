import axios, { AxiosResponse } from 'axios';
import { IPokemon, IUser, IAbilityInfo } from '@/interfaces';
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


export const getPokemonById = async (url: string): Promise<IPokemon> => {
    try {
        const response = await axios.get(url);
        const data = response.data;

        const abilities = data.abilities.map((ability: IAbilityInfo) => ({
            ability: {
                name: ability.ability.name,
            },
        }));

        const sprites = {
            front_default: data.sprites.front_default,
        };

        const pokemon: IPokemon = {
            name: data.name,
            url: data.url,
            abilities: abilities,
            sprites: sprites,
        };

        return pokemon;
    } catch (error) {
        throw new Error('No se pudo obtener la información del Pokémon');
    }
};




export const loginServices = async (body: IUser) => {
  const user: IUser | undefined = DataUser.users.find((user) => user.email === body.email);


  if (!user || user.password !== body.password) {
    throw new Error('Credenciales inválidas');
  }

  const token = tokenSave;

  return {
    token,
    user,
  };
};

