import React from "react";
import { Topbar, Sidebar } from "./components";
import "./app.css";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
