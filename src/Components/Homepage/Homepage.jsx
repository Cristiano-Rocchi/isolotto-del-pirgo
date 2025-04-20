import React from "react";
import "./Homepage.css";

//immagini
import homeImg from "../../Assets/Home/Isolotto-Pirgo-6.jpg";
const Homepage = () => {
  return (
    <>
      {/* HEADER SECTION */}
      <div className="header-section">
        <img src={homeImg} alt="" />
        <div className="title">
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
      {/**/}
    </>
  );
};
export default Homepage;
