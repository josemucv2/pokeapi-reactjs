import React, { useState, useEffect } from "react";
import { Card, Pagination } from "@/components";

interface Pokemon {
  name: string;
  url: string;
  abilities: { name: string }[];
  sprites: { front_default: string };
}

const ITEMS_PER_PAGE = 10;

export const Dashboard: React.FC = () => {
  const [pokemonWithImages, setPokemonWithImages] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pokemonSelected, setPokemonSelected] = useState<Pokemon>();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage === ITEMS_PER_PAGE) {
      return;
    }
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

  useEffect(() => {
    const fetchData = async () => {
      // Simulating fetching data from an API
      try {
        // Assuming getPokemon and getPokemonById are mock functions for fetching data
        const data: Pokemon[] = await getPokemon(
          ITEMS_PER_PAGE,
          (currentPage - 1) * ITEMS_PER_PAGE
        );

        const pokemonDetail: Pokemon[] = await Promise.all(
          data.map(async (element: Pokemon) => {
            const pokemonDetail = await getPokemonById(element.url);
            const pokemonAbilities = pokemonDetail.abilities.map(
              (element: any) => {
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

    fetchData();
  }, [currentPage]); // Run this effect whenever currentPage changes

  useEffect(() => {
    console.log(pokemonSelected, "Selected Pokemon"); // Este console.log se ejecutará cada vez que pokemonSelected cambie
  }, [pokemonSelected]);

  return (
    <div>
      <div className="flex flex-wrap justify-between px-16 pb-16">
        {pokemonWithImages.map((element: Pokemon, index: number) => (
          <div onClick={() => selectedPokemon(element)} key={index}>
            <Card
              name={element.name}
              image={element.sprites?.front_default}
              ability1={
                element.abilities.length > 0 ? element.abilities[0].name : ""
              }
              ability2={
                element.abilities.length > 1 ? element.abilities[1].name : ""
              }
            />
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center">
        <Pagination
          totalPages={ITEMS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          nextPage={nextPage}
          backPage={backPage}
        />
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modals">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">
                ✕
              </button>
            </form>
            {pokemonSelected && (
              <Card
                name={pokemonSelected.name}
                image={pokemonSelected.sprites?.front_default}
                ability1={
                  pokemonSelected.abilities.length > 0
                    ? pokemonSelected.abilities[0].name
                    : ""
                }
                ability2={
                  pokemonSelected.abilities.length > 1
                    ? pokemonSelected.abilities[1].name
                    : ""
                }
              />
            )}
          </div>
        </div>
      </dialog>
    </div>
  );
};

// Mock functions for fetching data
const getPokemon = async (
  limit: number,
  offset: number
): Promise<Pokemon[]> => {
  // Simulated data fetching logic, replace with actual API calls
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data = await response.json();
  return data.results;
};

const getPokemonById = async (url: string): Promise<any> => {
  // Simulated data fetching logic, replace with actual API calls
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
