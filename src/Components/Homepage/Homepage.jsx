import React from "react";
import "./Homepage.css";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//immagini
import homeImg from "../../Assets/Home/Isolotto-Pirgo-6.jpg";
import antipastoDiMare from "../../Assets/Menu/Antipasto-di-pesce-scaled.jpg";
import antipastoDiTerra from "../../Assets/Menu/antipasto-di-terra-invernale.jpg";
import evento from "../../Assets/Eventi/8698644_06191135_fondazione_felicita_c_2024.03.20_mattinoa_81_2_.jpg";
import gallerysect2 from "../../Assets/Home/rf66-Isolotto-del-pirgo-9.jpg";
import gallerysect3 from "../../Assets/Home/isolotto-del-pirgo-10.jpg";

const Homepage = () => {
  return (
    <>
      {/* INDICE HTML
    1. HERO SECTION
    2. MENU SECTION
    3. EVENTI SECTION
    4. GALLERY SECTION
    5. FOOTER SECTION

    */}
      {/* --------1. HERO SECTION------------- */}
      <div className="hero-section">
        <img src={homeImg} alt="" />
        <div className="title">
          <h2>Un luogo unico. Un'esperienza indimenticabile</h2>
          <h1>ISOLOTTO DEL PIRGO</h1>
          <div className="scrolltxt-container">
            <h3>Prossima Apertura Maggio 2025</h3>
          </div>
          <button>PRENOTA UN TAVOLO</button>
        </div>
        <div className="arrow-down-sect">
          <div id="scrollDown">
            <div className="scroll-down-indicator">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19M12 19L5 12M12 19L19 12"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* -------2. MENU SECTION------------- 
      2.1 Piatti
      2.2 Bevande
      */}
      <div className="menu-section">
        <Container>
          <h1>&bull; Menu &bull;</h1>

          {/* 2.1 PIATTI */}
          <Row className="g-4">
            <h3>I Nostri Piatti</h3>
            <Col xs={12} md={6}>
              <div className="card-menu">
                {" "}
                <img src={antipastoDiMare} alt="Antipasto Di Mare" />
                <div className="card-text">
                  <h5>Antipasto Di Mare</h5>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="card-menu">
                <img src={antipastoDiTerra} alt="Antipasto Di Terra" />

                <div className="card-text">
                  <h5>Antipasto Di Terra</h5>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          {/* 2.2 BEVANDE */}
          <Row className="mt-5 g-4">
            <h3>I Nostri Vini</h3>
            <Col xs={12} md={4}>
              {" "}
              <div className="card-menu">
                <img src={antipastoDiTerra} alt="Antipasto Di Terra" />

                <div className="card-text">
                  <h5>Antipasto Di Terra</h5>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              {" "}
              <div className="card-menu">
                <img src={antipastoDiTerra} alt="Antipasto Di Terra" />

                <div className="card-text">
                  <h5>Antipasto Di Terra</h5>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              {" "}
              <div className="card-menu">
                <img src={antipastoDiTerra} alt="Antipasto Di Terra" />

                <div className="card-text">
                  <h5>Antipasto Di Terra</h5>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <div className="text-end mt-4">
            <a href="/">
              <h4>Vedi Menu Completo</h4>
            </a>
          </div>
        </Container>
      </div>
      {/* -------3. EVENTI SECTION------------- */}
      <div className="eventi-section">
        <Container>
          <h1>Eventi</h1>
          <Row>
            <Col xs={12} md={10} className="m-auto">
              <div className="card-eventi">
                <img src={evento} alt="" />
                <div className="card-text">
                  <h3>&bull; Evento 1</h3>
                  <h5>Data : 15/10/2022</h5>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="card-eventi">
                <div className="card-text">
                  <h3>&bull; Evento 2</h3>
                  <h5>Data : 15/10/2022</h5>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <img src={evento} alt="" />
              </div>
              <div className="card-eventi">
                <img src={evento} alt="" />
                <div className="card-text">
                  <h3>&bull; Evento 3</h3>
                  <h5>Data : 15/10/2022</h5>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <div className="text-end mt-4">
            <a href="/">
              <h4>Vedi Tutti Gli Eventi In Programma</h4>
            </a>
          </div>
        </Container>
      </div>
      {/* -------4. GALLERY SECTION------------- */}
      <div className="gallery-section pt-5">
        <Container fluid className="gallery-container-custom">
          <h1 className="text-center pb-5">Location</h1>
          <Row c>
            <Col xs={12} md={8}>
              <img src={gallerysect3} alt="" />
              <h3 className="text-center mt-5">Vista Mozzafiato</h3>
            </Col>
            <Col xs={12} md={4}>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Ipsa deleniti
                amet esse. Consequuntur pariatur eaque dignissimos iusto ullam
                unde fuga,
              </p>
              <hr />
              <button>PRENOTA ORA</button>
              <img src={gallerysect2} alt="" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* -------5. FOOTER SECTION------------- */}
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
export default Homepage;
