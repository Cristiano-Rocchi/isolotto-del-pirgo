import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      {/* ------- FOOTER SECTION------------- */}
      <footer className="footer-section">
        <Container>
          <Row className="gy-4 align-items-center">
            <Col xs={12} md={4} className="text-center text-md-start">
              <p>
                &copy; 2025 Isolotto del Pirgo <br /> Civitavecchia RM, Italia
              </p>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <p className="footer-nav">
                <a href="#menu">Menu</a> • <a href="#eventi">Eventi</a> •{" "}
                <a href="#">Contatti</a>
              </p>
            </Col>
            <Col xs={12} md={4} className="text-center text-md-end">
              <p>
                <a href="mailto:info@isolottodelpirgo.it">
                  info@isolottodelpirgo.it
                </a>
                <br />
                <a href="tel:+393387876361">+39 338 787 6361</a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
