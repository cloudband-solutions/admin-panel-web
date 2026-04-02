import React, { useState } from "react";
import Login from "./Login";
import { isLoggedIn } from "./services/AuthService";
import Sidebar from "./Sidebar";
import TopNavigation from "./TopNavigation";
import {
  Routes,
  Route
} from "react-router-dom";

import Dashboard from "./Dashboard";
import Home from "./Home";
import Settings from "./Settings";

export default App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!isLoggedIn()) {
    return (
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/login"
          element={<Login/>}
        />
      </Routes>
    );
  }

  return (
    <React.Fragment>
      <div className="app-container">
        <Sidebar
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />
        <div className={`app-main-section ${isSidebarOpen ? 'open' : ''}`}>
          <TopNavigation/>
          <main className="container-fluid px-3 pb-3">
            <Routes>
              <Route
                path="/"
                element={<Dashboard/>}
              />
              <Route
                path="/settings"
                element={<Settings/>}
              />
            </Routes>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}
