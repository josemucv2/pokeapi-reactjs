import { useEffect } from "react";
import { useNavbar } from "./useNavbar";
import { useNavigate } from "react-router-dom";
import PokmonLogo from "@/assets/images/pokemonLogo.png";
import { useUser } from "@/context/userContext";

const MENU = [
  {
    path: "/dashboard",
    label: "Dashboard",
    logout: false,
  },
  {
    path: "/dashboard/profile",
    label: "Mi perfil",
    logout: false,
  },
  {
    path: "/login",
    label: "Cerrar Sesión",
    logout: true,
  },
];

const Navbar: React.FC = (): JSX.Element => {
  const goPage = useNavigate();

  const user = useUser()

  const { handleClickOutside, setView, view, menuRef, profileRef } =
    useNavbar();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleMenuClick = (path: string, isLogout: boolean) => {
    if (isLogout) {
      localStorage.removeItem("token")
      localStorage.removeItem("user");

      console.log('al final pasa por aqui septimo', localStorage.getItem('user'), localStorage.getItem('token'))
      goPage("/login");
    } else {
      goPage(path);
    }
  };

  return (
    <div className="flex justify-between px-28 items-center pt-5">
      <img src={PokmonLogo} alt="logo" width={180} height={10} />

      <img
        ref={profileRef}
        src={user.avatar}
        alt="logo"
        width={80}
        height={80}
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
                onClick={() => handleMenuClick(element.path, element.logout)}
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
