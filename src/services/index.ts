import axios, { AxiosResponse } from 'axios';
import { IPokemon } from '@/interfaces';


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

export const getPokemonById = async (url: string): Promise<any> => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('No se pudo obtener la información del Pokémon');
    }
};
