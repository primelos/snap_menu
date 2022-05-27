import React, { useState } from "react";
import "./App.css";
import BodyContainer from "./components/bodyContainer";
import NavBar from "./components/navBar";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      style={{ backgroundColor: menuOpen ? "#555555" : "white" }}
      className="App"
    >
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <BodyContainer />
    </div>
  );
}

export default App;
