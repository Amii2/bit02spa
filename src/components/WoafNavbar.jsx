import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavLink from "react-bootstrap/NavLink";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CartContext } from "../assets/utils/CartContext";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";

export default function WoafNavbar() {
  const navigateFunction = useNavigate();
  const location = useLocation();
  const { cartItems } = useContext(CartContext);

  const navigate = (route) => {
    if (location.pathname === "/bit02spa/")
      localStorage.setItem("scrollPosition", window.scrollY);

    navigateFunction(route);

    if (route === "/bit02spa/") {
      const scrollPosition = localStorage.getItem("scrollPosition");
      setTimeout(
        () => window.scrollTo({ top: scrollPosition, behavior: "instant" }),
        0
      );
    } else window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      bg="dark"
      className="d-flex justify-content-between px-5 sticky-top"
    >
      <NavbarBrand
        onClick={() => navigate("/bit02spa/")}
        className="clickable-item"
      >
        <h1 className="m-0 p-0 h3 font-raleway fw-bold">WOAF</h1>
      </NavbarBrand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <NavbarCollapse id="navbar-nav" className="flex-grow-0">
        <Nav>
          <Button
            onClick={() => navigate("/bit02spa/login")}
            className="font-raleway fw-600 px-5 my-4 px-lg-4 my-lg-0 flex-grow-0 align-self-center order-lg-last ms-lg-4 align-self-lg-auto"
          >
            Ingresar
          </Button>
          <NavLink
            onClick={() => navigate("/bit02spa/")}
            className="font-raleway"
          >
            Inicio
          </NavLink>
          <NavLink
            onClick={() => navigate("/bit02spa/cart")}
            className="position-relative font-raleway"
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            <div className="position-relative w-100 h-100 bottom-100 end-0 ">
              <Badge
                bg="secondary"
                className="font-opensans fw-bold rounded-circle position-absolute start-100 badge bg-secondary translate-middle"
              >
                {cartItems.length}
              </Badge>
            </div>
          </NavLink>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
}
