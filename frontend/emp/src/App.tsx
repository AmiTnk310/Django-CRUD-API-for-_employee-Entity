import React from "react";
import "./App.css";
import ShowEmoloyee from "./Components/ShowEmoloyee";
import AddEmployee from "./Components/AddEmployee";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarMenu from "./Components/Navbar";
import UpdateEmployee from "./Components/UpdateEmployee";
import Detail from "./Components/Detail";
import HomePage from "./Components/HomePage";






function App() {
  return (
    <div className="App ">
      
      <Router>
        <NavbarMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employee" element={<ShowEmoloyee />} />
          <Route path="/addemp" element={<AddEmployee />} />
          <Route path="/:id/" element={<Detail/>}/>
          <Route path="/:id/update" element={<UpdateEmployee/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
