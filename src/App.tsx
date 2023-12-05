import router from "@/router";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from '@/context/userContext'

export const App: React.FC = (): JSX.Element => {
  return (
    <UserProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </UserProvider>
  );
};
