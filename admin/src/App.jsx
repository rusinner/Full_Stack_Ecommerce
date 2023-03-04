import React from "react";
import { Topbar, Sidebar } from "./components";
import { Home } from "./pages";
import "./app.css";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
