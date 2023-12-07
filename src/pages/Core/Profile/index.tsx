import { IRootState } from "@/store";
import { useSelector } from "react-redux";

export const Profile: React.FC = (): JSX.Element => {
  const user = useSelector((state: IRootState) => state.user.user);

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <div className="w-1/2  bg-white text-black h-full rounded-3xl">
        <div className="flex justify-center p-10 flex-col w-full items-center space-y-10">
          <img src={user.avatar} alt="" className="rounded-full" width={150} />
          <p className="title-general">{user.name}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-y-20 w-4/3">
          <div className="space-y-2 w-full  px-32">
            <div className="title-general">Correo Electronico</div>
            <p>{user.email}</p>
          </div>

          {user.lastName && (
            <div className="space-y-2 w-full  px-32">
              <div className="title-general">Apeelido</div>
              <p>{user.lastName}</p>
            </div>
          )}

          <div className="space-y-2 w-full  px-32">
            <div className="title-general">Pokemones propios</div>
            <p>{user.pokemonCount}</p>
          </div>

          <div className="space-y-2 w-full  px-32">
            <div className="title-general">Victorias</div>
            <p>{user.battlesWon}</p>
          </div>

          <div className="space-y-2 w-full  px-32">
            <div className="title-general">Derrotas</div>
            <p>{user.battlesLost}</p>
          </div>

          <div className="space-y-2 w-full  px-32">
            <div className="title-general">Pokemon Base</div>
            <p>{user.mainPokemon}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
