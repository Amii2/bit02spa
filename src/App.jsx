import '/src/assets/bootstrap/bootstrap.min.css';
import "./App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import BsButton from "react-bootstrap/Button";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavLink from "react-bootstrap/NavLink";

function App() {
  return (
    <>
      <header>
        <Navbar
          expand="lg"
          variant="dark"
          bg="dark"
          className="d-flex justify-content-between px-4"
        >
          <NavbarBrand href="#">
            <h3 className='m-0 p-0'>WOAF</h3>
          </NavbarBrand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <NavbarCollapse id="navbar-nav" className="flex-grow-0">
            <Nav>
              <NavLink>Home</NavLink>
              <NavLink>Home</NavLink>
              <NavLink>Home</NavLink>
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </header>
    </>
  );
}

export default App;
