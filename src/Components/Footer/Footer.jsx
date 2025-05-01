import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToGallery = () => {
    if (location.pathname !== "/") {
      navigate("/");
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
      {/* ------- FOOTER SECTION------------- */}
      <footer className="footer-section">
        <Container>
          <Row className="gy-4 align-items-center">
            <Col xs={12} md={4} className="text-center text-md-start">
              <p>
                &copy; 2025 Isolotto del Pirgo <br /> Civitavecchia RM, Italia{" "}
                <br />
                Via Duca d'Aosta 20
              </p>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <p className="footer-nav">
                <Link to="/menu">Menu</Link>•
                <span onClick={scrollToGallery}> Dove Siamo </span> •
                <a href="tel:+393387876361">Contatti</a>
              </p>
            </Col>
            <Col xs={12} md={4} className="text-center text-md-end">
              <p>
                <a href="mailto:info@isolottodelpirgo.it">
                  info@isolottodelpirgo.it
                </a>
                <br />

                <p>Tutti i diritti riservati</p>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
