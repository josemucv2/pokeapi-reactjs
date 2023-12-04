import { Outlet } from "react-router-dom";
import { ContainerBox } from "./auth.style";
import PokemonLogo from "@/assets/images/pokemonLogo.png";

export const Auth: React.FC = (): JSX.Element => {
  return (
    <div className="auth-layout">
      <ContainerBox>
        <img
            src={PokemonLogo}
            alt="logo"
            width={475}
            height={217}
        />
        <Outlet />
      </ContainerBox>
    </div>
  );
};
