import { Outlet } from "react-router-dom";
import { Navbar } from "@/components";

export const Core: React.FC = (): JSX.Element => {
  return (
    <div className="core-layout">
      <Navbar />
      <Outlet />
    </div>
  );
};
