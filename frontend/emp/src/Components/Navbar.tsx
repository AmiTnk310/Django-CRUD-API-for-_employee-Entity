import React from "react";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
// import * as mdb from 'mdb-ui-kit';
// import '~mdb-ui-kit/css/mdb.min.css';

export default function NavbarMenu() {
  return (
    <div className="my-5 bg-white" style={{position:"sticky" , top:0 , zIndex:"1"}} >
      <div>
      <h1>Employee CRUD Project</h1>
      </div>
      <div >
      <div className="box w-100 d-flex justify-content-center ">
        <div className="sub-box w-50 d-flex justify-content-between py-2" >
          <NavLink className="show-employee-nav" id="btn" to="/">
            Home
          </NavLink>

          <NavLink className="show-employee-nav" id="btn" to="/employee" >
            Employee List
          </NavLink>
          <NavLink className="add-employee-nav" id="btn" to="addemp">
            Add Employee
          </NavLink>
        </div>
      </div>
      </div>
    </div>
  );
}
