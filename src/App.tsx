import router from "@/router";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App: React.FC = (): JSX.Element => {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
};
