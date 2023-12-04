import { useEffect } from "react";
import { useNavbar } from "./useNavbar";
import { useNavigate } from "react-router-dom";
import PokmonLogo from "@/assets/images/pokemonLogo.png";
import avatarAsh from '@/assets/images/ash.webp'

const MENU = [
  {
    path: "/dashboard",
    label: "Dashboard",
  },
  {
    path: "/dashboard/profile",
    label: "Mi perfil",
  },
  {
    path: "/login",
    label: "Cerrar Sesion",
  },
];

const Navbar: React.FC = (): JSX.Element => {
  const goPage = useNavigate();

  const { handleClickOutside, setView, view, menuRef, profileRef } =
    useNavbar();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="flex justify-between px-28 items-center pt-5">
      <img src={PokmonLogo} alt="logo" width={180} height={10} />

      <img
        ref={profileRef}
        src={avatarAsh}
        alt="logo"
        width={80}
        height={100}
        className="cursor-pointer border p-3 rounded-full border-slate-600"
        onClick={() => setView(!view)}
      />

      {view && (
        <div
          ref={menuRef}
          className="absolute right-[80px] top-[70px] border w-[180px] h-[100px] rounded-lg bg-slate-200 flex flex-col items-center justify-center space-y-4"
        >
          {MENU.map((element, index) => {
            return (
              <div
                key={index}
                className="text-black text-xl hover:underline hover:text-blue-800 cursor-pointer"
                onClick={() => goPage(element.path)}
              >
                {element.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
