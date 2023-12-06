import RouterView from "@/router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "@/context/userContext";
import { Provider } from "react-redux";
import { store } from "./store";

export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <UserProvider>
          <ToastContainer />
          <RouterView />
        </UserProvider>
      </Provider>
    </BrowserRouter>
  );
};
