import { useState } from "react";
import { Pokemon } from "@/interfaces";
import { getPokemon, getPokemonById } from "@/services";
import { ReturnDashboardType } from './dashboard.types'



export const limit = 10
export const useDashboard = (): ReturnDashboardType => {

    const [pokemonWithImages, setPokemonWithImages] = useState<Pokemon[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pokemonSelected, setPokemonSelected] = useState<Pokemon>();
    const [totalPage, setTotalPage] = useState<number>(10)

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const backPage = () => {
        if (currentPage === 1) {
            return;
        }
        setCurrentPage(currentPage - 1);
    };

    const selectedPokemon = (pokemon: Pokemon) => {
        setPokemonSelected(pokemon);
        const modal = document.getElementById(
            "my_modal_3"
        ) as HTMLDialogElement | null;
        if (modal) {
            modal.showModal();
        }
    };

    const fetchData = async () => {
        try {
            const data = await getPokemon(
                limit,
                (currentPage - 1) * limit
            );

            const totalCount = data.count;
            const totalPageCount = Math.ceil(totalCount / limit);
            setTotalPage(totalPageCount);

            const pokemonDetail = await Promise.all(
                data.results.map(async (element) => {
                    const pokemonDetail = await getPokemonById(element.url);
                    const pokemonAbilities = pokemonDetail.abilities.map(
                        (element) => {
                            return element.ability;
                        }
                    );

                    return {
                        name: element.name,
                        sprites: pokemonDetail.sprites,
                        abilities: pokemonAbilities,
                    } as Pokemon;
                })
            );

            setPokemonWithImages(pokemonDetail);
        } catch (error) {
            // Handle error
            console.error("Error fetching data:", error);
        }
    };

    return {
        fetchData,
        selectedPokemon,
        backPage,
        nextPage,
        handlePageChange,
        pokemonWithImages,
        pokemonSelected,
        currentPage,
        limit,
        totalPage
    }
}