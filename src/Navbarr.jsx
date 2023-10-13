import React from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import "./App.css";

const Navbarr = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
        className="custom-navbar "
        style={{ border: "1px solid gray" }}
      >
        <Container>
          <Navbar.Brand href="/" style={{ color: "black" }}>
            MEY HOME
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ color: "black" }}/>
          <Navbar.Collapse id="responsive-navbar-nav"style={{ color: "black" }} >
            <Nav className="ml-auto ">
              <NavLink
                class="nav-item "
                style={{ color: "black", fontSize: "16px" }}
                href="/"
              >
                Anasayfa
              </NavLink>

              {/* <NavLink
                href="/hakkimizda"
                class="active nav-link"
                style={{ color: "black", fontSize: "16px" }}
              >
                Hakkımızda
              </NavLink>
              <NavLink style={{ color: "black", fontSize: "16px" }}>
                Hizmetler
              </NavLink> */}

              <NavLink style={{ color: "black", fontSize: "16px" }}>
                İletişim
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
