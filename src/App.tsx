import RouterView from "@/router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { AuthLayout } from "./layouts/Auth/auth.style";

export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthLayout>
          <ToastContainer />
          <RouterView />
        </AuthLayout>
      </Provider>
    </BrowserRouter>
  );
};
