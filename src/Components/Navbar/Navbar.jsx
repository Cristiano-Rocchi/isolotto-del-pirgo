import React, { useState, useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./Navbar.css";

const MyNavbar = () => {
  // Hooks & States
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  // Effects
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

  // Functions
  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const scrollToGallery = () => {
    handleClose(); // chiude il menu

    if (!isHome) {
      Navigate("/"); // se non siamo in home, prima vai a home
      setTimeout(() => {
        const section = document.getElementById("gallery-section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // aspetta che la home sia caricata
    } else {
      const section = document.getElementById("gallery-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <Navbar
        expand="md"
        fixed="top"
        className={`navbar-custom ${scrolled ? "navbar-scrolled" : ""}`}
      >
        <Container>
          {/* LOGO */}
          <Link to={"/"}>
            <Navbar.Brand className="logo">
              Isolotto <br /> Del Pirgo
            </Navbar.Brand>
          </Link>

          {/* TOGGLE BUTTON */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow}>
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
              show={showOffcanvas}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 navbar-links">
                  <Nav.Link as={Link} to={"/"} onClick={handleClose}>
                    <span className="mobile-bullet">&bull;</span> Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/menu"} onClick={handleClose}>
                    <span className="mobile-bullet">&bull;</span> Menu
                  </Nav.Link>
                  <Nav.Link onClick={() => scrollToGallery()}>
                    <span className="mobile-bullet">&bull;</span> Chi siamo
                  </Nav.Link>
                  <Nav.Link href="tel:+393387876361" onClick={handleClose}>
                    <span className="mobile-bullet">&bull;</span> Contattaci
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>

          <h4 className="language">ITA</h4>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
