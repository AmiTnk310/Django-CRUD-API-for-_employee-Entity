import react from "react"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import icon from "../image/icon.png";

function NavMenu() {

  return (
    <div className="container">
      <Navbar bg="light" expand="md" className="mb-3 w-100 bg-primary">
        <Container fluid className="w-75">
          <Navbar.Brand href="/">
            <img src={icon} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />

        
       <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
            className="w-75 "
          >
            <Offcanvas.Header closeButton >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
              <img src={icon} alt="" />  Employee CRUD
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-between flex-grow-1 pe-3">
                <NavLink className="show-employee-nav" id="btn" to="/" >
                  Home
                </NavLink>
                <NavLink className="show-employee-nav" id="btn" to="/employee">
                  Employee List{" "}
                </NavLink>

                <NavLink className="add-employee-nav" id="btn" to="addemp">
                  + Add Employee{" "}
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          
       
       
        </Container>
      </Navbar>
    </div>
  );
}

export default NavMenu;
