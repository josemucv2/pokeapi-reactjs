import React, { useEffect } from "react";
import { Card, Pagination } from "@/components";
import { IPokemon } from '@/interfaces'
import { useDashboard } from "./useDashboard";

export const Dashboard: React.FC = (): JSX.Element => {

  const {
    fetchData,
    selectedPokemon,
    backPage,
    nextPage,
    handlePageChange,
    pokemonWithImages,
    pokemonSelected,
    currentPage,
    totalPage
  } = useDashboard()


  useEffect(() => {
    fetchData();
  }, [currentPage]);


  return (
    <>
      <div className="flex flex-wrap justify-between px-16 pb-16">
        {pokemonWithImages.map((element: IPokemon, index: number) => (
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
          totalPages={totalPage}
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
    </>
  );
};

// Mock functions for fetching data
