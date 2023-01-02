import react from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import icon from "../image/icon.png";

function NavMenu() {
  return (
    <div className="container">
     
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            {" "}
            <img src={icon} alt="" />{" "}
            <span style={{ fontWeight: 700 , color:'rgb(45,75,55)'}}>Employee CRUD</span>{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse center"
            id="navbarSupportedContent"
          >
            <div className="d-flex justify-content-center w-100">
              <div className="mobile d-flex  justify-content-between my-2 my-lg-0  w-75">
                <NavLink className="show-employee-nav  my-2" id="btn" to="/">
                  <span
                    style={{ height: "100%" }}
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Home
                  </span>
                </NavLink>
                <NavLink
                  className="show-employee-nav  my-2"
                  id="btn"
                  to="/employee"
                >
                  <span
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Employee List
                  </span>
                </NavLink>

                <NavLink
                  className="add-employee-nav  my-2"
                  id="btn"
                  to="addemp"
                >
                  <span
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    {" "}
                    + Add Employee
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavMenu;
