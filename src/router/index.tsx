import { Route, Routes, Navigate } from "react-router-dom";

import { Auth } from "@/layouts/Auth";
import { Core } from "@/layouts/Core";

import { Login } from "@/pages/Auth/Login";
import { Welcome } from "@/pages/Auth/Welcome";

import { Dashboard } from "@/pages/Core/Dashboard";
import { Profile } from "@/pages/Core/Profile";
import { IsUserAuthenticated } from "./validateToken";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />}>
        <Route path="" element={<Welcome />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route
        path="/dashboard"
        element={IsUserAuthenticated() ? <Core /> : <Navigate to="/login" />}
      >
        <Route path="" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
