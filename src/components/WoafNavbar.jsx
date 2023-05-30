import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavLink from "react-bootstrap/NavLink";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function WoafNavbar() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      bg="dark"
      className="d-flex justify-content-between px-4"
    >
      <NavbarBrand as="span" href="#" className="span-link">
        <Link to="/bit02spa" className="nav-router-link">
          <h3 className="m-0 p-0">WOAF</h3>
        </Link>
      </NavbarBrand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <NavbarCollapse id="navbar-nav" className="flex-grow-0">
        <Nav>
          <Link
            to="/bit02spa/Login"
            className="nav-router-link flex-grow-0 align-self-center order-lg-last ms-lg-4 align-self-lg-auto"
          >
            <Button className="px-5 my-4 px-lg-4 my-lg-0">Ingresar</Button>
          </Link>
          <Link to="/bit02spa" className="nav-router-link">
            <NavLink as="span" className="span-link">
              Inicio
            </NavLink>
          </Link>
          <Link to="/bit02spa#Products" className="nav-router-link">
            <NavLink as="span" className="span-link">
              Productos
            </NavLink>
          </Link>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
}
