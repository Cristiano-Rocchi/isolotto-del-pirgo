import React, { useRef, useState, useEffect } from "react";
import "./Menu.css";

const Menu = () => {
  // -----------------------------
  // 1. REFERENCES E STATE
  // -----------------------------
  const antipastiRef = useRef(null);
  const bevandeRef = useRef(null);
  const [activeSection, setActiveSection] = useState("antipasti");

  // -----------------------------
  // 2. SCROLL DETECTION EFFECT
  // -----------------------------
  useEffect(() => {
    const handleScroll = () => {
      const antipastiTop = antipastiRef.current.getBoundingClientRect().top;
      const bevandeTop = bevandeRef.current.getBoundingClientRect().top;

      if (bevandeTop <= 150) {
        setActiveSection("bevande");
      } else {
        setActiveSection("antipasti");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // -----------------------------
  // 3. SCROLL TO SECTION
  // -----------------------------
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // -----------------------------
  // 4. JSX RETURN
  // -----------------------------
  return (
    <div className="menu-page">
      {/* 4.1 NAVBAR CON CATEGORIE */}
      <div className="menu-navbar">
        <button
          className={activeSection === "antipasti" ? "active" : ""}
          onClick={() => scrollTo(antipastiRef)}
        >
          Antipasti
        </button>
        <button
          className={activeSection === "bevande" ? "active" : ""}
          onClick={() => scrollTo(bevandeRef)}
        >
          Bevande
        </button>
      </div>

      {/* 4.2 SEZIONE ANTIPASTI */}
      <div className="menu-category" ref={antipastiRef}>
        <h2>Antipasti</h2>
        <div className="menu-item">
          <h4>Antipasto di Terra</h4>
          <p>Salumi, formaggi, verdure grigliate</p>
        </div>
        <div className="menu-item">
          <h4>Antipasto di Mare</h4>
          <p>Gamberi, polpo, cozze, vongole</p>
        </div>
      </div>

      {/* 4.3 SEZIONE BEVANDE */}
      <div className="menu-category" ref={bevandeRef}>
        <h2>Bevande</h2>
        <div className="menu-item">
          <h4>Bevanda 1</h4>
          <p>Coca Cola 33cl</p>
        </div>
        <div className="menu-item">
          <h4>Bevanda 2</h4>
          <p>Acqua Naturale</p>
        </div>
        <div className="menu-item">
          <h4>Bevanda 3</h4>
          <p>Birra Artigianale</p>
        </div>
        <div className="menu-item">
          <h4>Bevanda 4</h4>
          <p>Birra Artigianale</p>
        </div>
        <div className="menu-item">
          <h4>Bevanda 5</h4>
          <p>Birra Artigianale</p>
        </div>
        <div className="menu-item">
          <h4>Bevanda 6</h4>
          <p>Birra Artigianale</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
