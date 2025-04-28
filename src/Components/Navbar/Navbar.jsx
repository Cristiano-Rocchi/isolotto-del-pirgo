import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./Navbar.css";

const MyNavbar = () => {
  // Hooks & States
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const checkScroll = () => {
      if (!isHome) {
        setScrolled(true); // se NON siamo in home, sempre colorato SUBITO
        return;
      }

      const offset = window.scrollY;
      if (offset > window.innerHeight / 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    checkScroll(); // ⬅️ chiamalo SUBITO appena monta
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [isHome]);

  return (
    <>
      <Navbar
        expand="md"
        fixed="top"
        className={`navbar-custom ${scrolled ? "navbar-scrolled" : ""}`}
      >
        <Container>
          {/* LOGO */}
          <Navbar.Brand href="#home" className="logo">
            Isolotto <br /> Del Pirgo
          </Navbar.Brand>

          {/* TOGGLE BUTTON */}
          <Navbar.Toggle aria-controls="offcanvasNavbar">
            <svg
              className="hamburger-icon"
              width="40"
              height="24"
              viewBox="0 0 40 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect className="line" y="2" width="40" height="2" />
              <rect className="line" y="11" width="40" height="2" />
              <rect className="line" y="20" width="40" height="2" />
            </svg>
          </Navbar.Toggle>

          {/* SIDEBAR OFFCANVAS */}
          <div>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#home">&bull; Home</Nav.Link>
                  <Nav.Link href="#menu">&bull; Menu</Nav.Link>
                  <Nav.Link href="#chisiamo">&bull; Chi siamo</Nav.Link>
                  <Nav.Link href="#contattaci">&bull; Contattaci</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>

          <h4 className="language">IT</h4>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
