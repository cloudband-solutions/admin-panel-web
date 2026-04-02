import React from "react";
import Login from "./Login";
import { isLoggedIn } from "./services/AuthService";
import Sidebar from "./Sidebar";
import TopNavigation from "./TopNavigation";
import {
  Navigate,
  Outlet,
  Routes,
  Route
} from "react-router-dom";

import Dashboard from "./Dashboard";
import Home from "./Home";
import Settings from "./Settings";
import UsersIndex from "./users/Index";
import UsersShow from "./users/Show";
import UsersForm from "./users/Form";

const RequireAuth = () => {
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

const AuthenticatedLayout = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="app-main-section">
        <TopNavigation />
        <main className="app-page-shell container-fluid px-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn() ? <Navigate to="/dashboard" replace /> : <Home />}
      />
      <Route
        path="/login"
        element={isLoggedIn() ? <Navigate to="/dashboard" replace /> : <Login />}
      />

      <Route element={<RequireAuth />}>
        <Route element={<AuthenticatedLayout />}>
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/settings"
            element={<Settings />}
          />
          <Route
            path="/users"
            element={<UsersIndex />}
          />
          <Route
            path="/users/new"
            element={<UsersForm />}
          />
          <Route
            path="/users/:id"
            element={<UsersShow />}
          />
          <Route
            path="/users/:id/edit"
            element={<UsersForm />}
          />
        </Route>
      </Route>

      <Route
        path="*"
        element={<Navigate to={isLoggedIn() ? "/dashboard" : "/"} replace />}
      />
    </Routes>
  );
};

export default App;
