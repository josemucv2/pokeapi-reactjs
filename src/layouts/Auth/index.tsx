import { Outlet } from "react-router-dom";
import { AuthLayout } from "./auth.style";
import PokemonLogo from "@/assets/images/pokemonLogo.png";

export const Auth: React.FC = (): JSX.Element => {
  return (
    <AuthLayout>
      <div className="lg:w-[475px] w-full h-[600px] bg-white absolute top-[80px] lg:top-[90px] lg:left-[180px] shadow-lg rounded-lg">
        <img src={PokemonLogo} alt="logo" width={475} height={217} />
        <Outlet />
      </div>
    </AuthLayout>
  );
};
