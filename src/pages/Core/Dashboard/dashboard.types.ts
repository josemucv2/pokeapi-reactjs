import { Pokemon } from "@/interfaces"
export type ReturnDashboardType = {
    fetchData: () => Promise<void>,
    selectedPokemon: (pokemon: Pokemon) => void,
    backPage: () => void,
    nextPage: () => void,
    handlePageChange: (page: number) => void,
    pokemonWithImages: Pokemon[],
    pokemonSelected: Pokemon | undefined,
    currentPage: number,
    limit: number,
    totalPage: number
}