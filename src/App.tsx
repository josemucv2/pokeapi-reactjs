import router from "@/router";
import { RouterProvider } from "react-router-dom";

export const App: React.FC = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
