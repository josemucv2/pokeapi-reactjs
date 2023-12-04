import axios, { AxiosResponse } from 'axios';
import { Pokemon } from '@/interfaces';

export interface ApiResponse {
    next: string | null;
    previous: string | null;
}

export type CustomResponse<T> = AxiosResponse & {
    data: T
    count: number,
    results: Pokemon[]
}

export const getPokemon = async (limit: number, offset: number): Promise<CustomResponse<Pokemon>> => {
    try {
        const response = await axios.get<CustomResponse<ApiResponse>>(`${import.meta.env.VITE_BASE_URL}?limit=${limit}&offset=${offset}`);
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
