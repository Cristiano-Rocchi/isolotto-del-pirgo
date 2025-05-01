import React, { useEffect } from "react";
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

//icons
import whatsapp from "../../Assets/Icons/whatsapp.svg";
import instagram from "../../Assets/Icons/instagram.svg";
import phone from "../../Assets/Icons/phone.svg";
import { Link } from "react-router-dom";

const Homepage = () => {
  //Animazione allo scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.2, // scatta quando almeno il 20% è visibile
      }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

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
            <h3>Prossima Apertura Estate 2025</h3>
          </div>
          <Link to="/prenota">
            <button>PRENOTA UN TAVOLO</button>
          </Link>
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
          <h1 className="animate-on-scroll">&bull; Menu &bull;</h1>

          {/* 2.1 PIATTI */}
          <Row className="g-4">
            <h3 className="animate-on-scroll">I Nostri Piatti</h3>
            <Col xs={12} md={6}>
              <div className="card-menu animate-on-scroll left">
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
              <div className="card-menu animate-on-scroll right">
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
              <div className="card-menu animate-on-scroll left">
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
              <div className="card-menu animate-on-scroll right">
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
              <div className="card-menu animate-on-scroll left">
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
            <Link to={"/menu"}>
              <h4>Vedi Menu Completo</h4>
            </Link>
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

      <div id="gallery-section" className="gallery-section pt-5">
        <Container fluid className="gallery-container-custom">
          <h1 className="text-center pb-5 animate-on-scroll">
            &bull; Location &bull;
          </h1>
          <Row>
            <Col xs={12} md={8}>
              {" "}
              <h3 className="text-center mb-3">Vista Mozzafiato</h3>
              <img src={gallerysect3} alt="" className="animate-on-scroll" />
            </Col>
            <Col xs={12} md={4} className="mb-5">
              <p className="mt-5 animate-on-scroll right">
                L'Isolotto del Pirgo è un angolo esclusivo affacciato sul mare
                di Civitavecchia, perfetto per chi cerca relax e atmosfera
                suggestiva. Aperto per tutta la stagione estiva, il locale offre
                un servizio attento e spazi ideali sia per momenti di svago che
                per eventi privati. Accettiamo prenotazioni per feste, cerimonie
                e ricorrenze speciali, garantendo sempre un’esperienza unica e
                indimenticabile.
              </p>
              <hr />
              <Link to={"/prenota"}>
                <button className="animate-on-scroll">PRENOTA ORA</button>
              </Link>

              <img src={gallerysect2} alt="" className="animate-on-scroll" />
            </Col>
          </Row>
          <hr />
          <Row className="mt-5 mb-5 align-items-center">
            <Col xs={12} md={6} className="animate-on-scroll left">
              <h4 className="text-center fw-bold">
                Ci trovi a Civitavecchia (RM)
              </h4>
              <p>
                La nostra location è situata nel cuore di Civitavecchia, in
                <strong> Via Duca d'Aosta 20</strong>, facilmente raggiungibile
                e con una vista mozzafiato. Vieni a trovarci per un’esperienza
                indimenticabile!
              </p>
            </Col>
            <Col xs={12} md={6}>
              <div className="location-map-wrapper animate-on-scroll right">
                <iframe
                  title="Mappa Civiltavecchia"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.801565624074!2d11.79435181541884!3d42.09635707920598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1328b5240d926d21%3A0x7e2a66a7a3eb1f88!2sVia%20Duca%20d'Aosta%2C%2020%2C%2005300%20Civitavecchia%20RM!5e0!3m2!1sit!2sit!4v1683301478632!5m2!1sit!2sit"
                  width="100%"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="text-center mt-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Via+Duca+d'Aosta+20+Civitavecchia+RM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Portami lì</button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* -------5. CONTACT SECTION------------- */}
      <div className="contact-home">
        <div className="contact-home-content">
          <p>Contatti</p>
          <div className="contact-icons">
            <a
              href="tel:+393387876361"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={phone} alt="" />
            </a>
            <a
              href="https://wa.me/393387876361"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="" />
            </a>
            <a
              href="https://www.instagram.com/isolottodelpirgo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
