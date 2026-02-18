import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);;

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Jumia Clone
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex mx-auto" style={{ width: "50%" }}>
            <FormControl
              type="search"
              placeholder="Search products..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
              {cart && cart.total_items > 0 && (
                <Badge bg="warning" text="dark" pill className="ms-1">
                  {cart.total_items}
                </Badge>
              )}
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
