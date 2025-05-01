import React, { useEffect } from "react";
import "./Prenota.css";

const Prenota = () => {
  const handleWhatsappClick = () => {
    window.open("https://wa.me/393387876361", "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+393387876361";
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="prenota-page">
      <hr />
      <h1 className="prenota-title">&bull; Prenota un Tavolo &bull;</h1>

      <p className="prenota-description">
        Il nostro locale accetta prenotazioni per tavoli direttamente tramite
        WhatsApp. Contattaci in modo semplice e veloce cliccando il pulsante qui
        sotto.
      </p>

      <button className="prenota-button" onClick={handleWhatsappClick}>
        Prenota su WhatsApp
      </button>

      <hr />

      <h2 className="prenota-title">&bull; Eventi Speciali &bull;</h2>

      <p className="prenota-description">
        Per organizzare eventi come compleanni, matrimoni o cerimonie private,
        ti invitiamo a contattarci direttamente telefonicamente.
      </p>

      <button className="prenota-button" onClick={handleCallClick}>
        Chiama per Prenotare Eventi
      </button>
      <hr />
    </div>
  );
};

export default Prenota;
