import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarMenu from "./Components/Navbar";
import AnimatedRoute from "./Components/AnimatedRoute";

function App() {
  return (
    <div className="App d-flex flex-column  align-items-center">
      <Router>
        <NavbarMenu />
        <AnimatedRoute />
      </Router>
    </div>
  );
}

export default App;
