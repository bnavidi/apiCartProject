import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

function NavbarComponent() {
  const { cart } = useContext(CartContext); //kart verilerini okumak için
  const cartItemCount = cart.length;

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">MyStore</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem className="me-2">
          <NavLink tag={Link} to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/cart">
            Cart - {cartItemCount}
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
export default NavbarComponent;
