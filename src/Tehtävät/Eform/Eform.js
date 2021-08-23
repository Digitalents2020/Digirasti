import React, { useState } from "react";
import "./Eform.css";

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
            Tässä tehtävässä opetellaan Sähköisen lomakkeen. Sähköisiä lomakkeita on monenlaisia, mutta tässä harjoitellaan täyttämään mahdollisesti työnhaun yhteydessä vastaan tulevaa lomaketta.
          </p>
          <p>Ei huolta, tässäkään tehtävässä ei oikeasti lähetetä mitään minnekkään</p>
          <h5>Hakulomake</h5>
          <div className="field">
            <form>
              <label>Etunimi</label>
              <input type="text"></input>
              <label>Sukunimi</label>
              <input type="text"></input>
              <label>Sähköposti</label>
              <input type="text"></input>
              <label>Puhelinnumero</label>
              <input type="text"></input>
              <label>Työkokemus 1</label>
              <textarea></textarea>
              <label>Työkokemus 2</label>
              <textarea></textarea>
              <label>Korkein koulutusaste</label>
              <select>
                  <option>Kansakoulu</option>
                  <option>Peruskoulu</option>
                  <option>Ammattikoulu</option>
                  <option>Kaksoistutkinto</option>
                  <option>Ylioppilastutkinto</option>
              </select>
              <label>Kerro kolmella lauseella, millainen työntekijä olisit</label>
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
          Hienoa! Näin kirjoitat ja lähetät sähköisen lomakkeen! Voit nyt siirtyä
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
