import React from "react";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
// import * as mdb from 'mdb-ui-kit';
// import '~mdb-ui-kit/css/mdb.min.css';

export default function NavbarMenu() {
  return (
    <div className="   my-5 ">
      <h1>Employee CRUD Project</h1>
      {/* <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto"> */}
      {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link> */}
      {/* {/* <NavLink className="show-employee-nav" to='/employee'>Employees</NavLink> */}
      {/* <NavLink className="add-employee-nav" to='addemp'>Add Employee</NavLink> */}
      {/* <NavLink className="update-employee-nav" to ="update">Update</NavLink> */}
      {/* </Nav> */}
      {/* </Navbar> */}
      <div className="box mt-5 w-100 d-flex justify-content-center "   style={{backgroundColor:"rgba(228, 224, 224, 0.300)" , borderRadius:"5px"}}>
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
  );
}
