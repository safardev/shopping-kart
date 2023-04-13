import React from "react";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavComp() {
  const items = useSelector((state) => {
    return state.cart.cart.length;
  });
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none", color: "#ffffff" }}>
              ShoppingKart
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#e1e8e3",
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/cart"
                style={{ textDecoration: "none", color: "#e1e8e3",float:'right' }}
              >
                Cart <Badge bg="danger">{items}</Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
