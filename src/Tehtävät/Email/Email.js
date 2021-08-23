import React, { useState } from "react";
import "./Email.css";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}> {text} </button>
);
const Email = () => {
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleRightClick = () => {
    setAll(allClicks.concat("p"));
    setRight(right + 1);
  };

  const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div className="form-box">
          <p>
            Tässä tehtävässä opetellaan sähköpostin kirjoittamista ja
            liittetiedoston liittämistä. Sähköpostissa on aina kolme eri osaa:
            Vastaanottaja, aihe ja itse viesti. Joskus tarpeen on neljäs osa
            joka on liitetiedosto. Tehtävänäsi on kirjoittaa pienimuotoinen
            työhakemus vastaanottajalle esimerkki.makkonen@testi-pesti.fi ja
            muistathan myös liittää CV:si sähköpostin liitteeksi!
          </p>
          <p>Ei huolta, kirjoittamasi hakemus ei oikeasti lähde mihinkään</p>
          <h5>Sähköposti</h5>
          <div className="field">
            <form>
              <label>vastaanottaja</label>
              <input type="text"></input>
              <label>Aihe</label>
              <input type="text"></input>
              <label>Viesti</label>
              <textarea></textarea>
              <label>Lataa liite</label>
              <input type="file"></input>
              <Button handleClick={handleRightClick} text="Lähetä" />
            </form>
          </div>
        </div>
      );
    }

    return (
      <div className="form-box">
        <p>
          Hienoa! Näin kirjoitat ja lähetät sähköpostin! Voit nyt siirtyä
          seuraavaan tehtävään tai odottaa ohjaajan antamia ohjeita
        </p>
      </div>
    );
  };

  return (
    <div>
      <div>
        <History allClicks={allClicks} />
      </div>
    </div>
  );
};

export default Email;
