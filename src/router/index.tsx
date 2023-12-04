import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouteObject,
  Navigate,
} from "react-router-dom";

import { Auth } from "@/layouts/Auth";
import { Core } from "@/layouts/Core";

import { Login } from "@/pages/Auth/Login";
import { Welcome } from "@/pages/Auth/Welcome";

import { Dashboard } from "@/pages/Core/Dashboard";
import { Profile } from "@/pages/Core/Profile";
import { toast } from "react-toastify";

const isUserAuthenticated = () => {
  const sessionToken = sessionStorage.getItem("token");
  const localToken = localStorage.getItem("token");

  if (!!sessionToken || !!localToken) {
    toast.error("Usuario no autenticado");
  }
  return true;
};

const routes: RouteObject[] = createRoutesFromElements(
  <>
    <Route path="/" element={<Auth />}>
      <Route path="" element={<Welcome />} />
      <Route path="login" element={<Login />} />
    </Route>
    <Route
      path="/dashboard"
      element={isUserAuthenticated() ? <Core /> : <Navigate to="/" />}
    >
      <Route path="" element={<Dashboard />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  </>
);

export default createBrowserRouter(routes);
