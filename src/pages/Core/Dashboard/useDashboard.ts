import { useState } from "react";
import { IPokemon } from "@/interfaces";
import { getPokemon, getPokemonById } from "@/services";
import { ReturnDashboardType } from './dashboard.types'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from '@/store'
import { setPokemons } from '@/store/pokemons/pokemonActions'



export const limit = 10
export const useDashboard = (): ReturnDashboardType => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pokemonSelected, setPokemonSelected] = useState<IPokemon>();
    const [totalPage, setTotalPage] = useState<number>(10)
    const [loading, setLoading] = useState<boolean>(false)

    const { pokemonList } = useSelector((state: IRootState) => state.pokemons)
    const dispatch = useDispatch();


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

    const selectedPokemon = (pokemon: IPokemon) => {
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
        setLoading(true);
        const data = await getPokemon(
            limit,
            (currentPage - 1) * limit
        );

        const totalCount = data.count;
        const totalPageCount = Math.ceil(totalCount / limit);
        setTotalPage(totalPageCount);

        const pokemonDetail = await Promise.all(
            data.results.map(async (element) => {
                try {
                    const pokemonDetail = await getPokemonById(element.url);
                    
                    return {
                        name: element.name,
                        sprites: pokemonDetail.sprites,
                        abilities: pokemonDetail.abilities,
                    };
                } catch (error) {
                    console.error(`Error obteniendo detalles de ${element.name}: ${error}`);
                    return null; 
                }
            })
        );

        const validPokemonDetail = pokemonDetail.filter((detail): detail is IPokemon => detail !== null);

        dispatch(setPokemons(validPokemonDetail))
        setLoading(false);
    } catch (error) {
        toast.error(`${error}`);
    }
};


    return {
        fetchData,
        selectedPokemon,
        backPage,
        nextPage,
        handlePageChange,
        pokemonList,
        pokemonSelected,
        currentPage,
        limit,
        totalPage,
        loading
    }
}