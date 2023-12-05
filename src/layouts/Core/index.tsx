import { Outlet } from "react-router-dom";
import { Navbar } from "@/components";
import { useUser } from "@/context/userContext";

export const Core: React.FC = (): JSX.Element => {
  const user = useUser()

  console.log(user, 'aljdnjk;land')
  return (
    <div className="core-layout">
      <Navbar />
      <Outlet />
    </div>
  );
};
