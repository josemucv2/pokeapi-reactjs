import { IPokemon } from "@/interfaces"
export type ReturnDashboardType = {
    fetchData: () => Promise<void>,
    selectedPokemon: (pokemon: IPokemon) => void,
    backPage: () => void,
    nextPage: () => void,
    handlePageChange: (page: number) => void,
    pokemonWithImages: IPokemon[],
    pokemonSelected: IPokemon | undefined,
    currentPage: number,
    limit: number,
    totalPage: number,
    loading: boolean
}