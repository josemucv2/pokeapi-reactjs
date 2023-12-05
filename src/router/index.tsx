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

export const isUserAuthenticated = () => {
  console.log('aqui ya deberia de tener el token,', localStorage.getItem('token'))
  return !!localStorage.getItem("token")
}

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
