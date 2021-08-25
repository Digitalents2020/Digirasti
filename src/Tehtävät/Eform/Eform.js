import React, { useState } from "react";
import "./Eform.css";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}> {text} </button>
);

/*This state change part was done by following the mooc.fi fullstack tutorial. But the gist of it is that we have an array that aps a "p" (for pressed) in to the array*/
const Email = () => {
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleRightClick = () => {
    setAll(allClicks.concat("p"));
    setRight(right + 1);
  };

/*Here we check wether the array is empty and we remain on this state, or if there is an item, we switch state to the next one*/  
  const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div className="form-box">
          <p>
            Tässä tehtävässä opetellaan sähköisen lomakkeen täyttämistä ja lähettämistä. Sähköisiä lomakkeita on monenlaisia, mutta tässä harjoitellaan täyttämään mahdollisesti työnhaun yhteydessä vastaan tulevaa lomaketta.
          </p>
          <p>Ei huolta, tässäkään tehtävässä ei oikeasti lähetetä mitään minnekkään</p>
          <h5>Hakulomake</h5>
          <br></br>
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
              <select className='degree'>
                  <option>Valitse koulutusaste...</option>
                  <option>Kansakoulu</option>
                  <option>Peruskoulu</option>
                  <option>Ammattikoulu</option>
                  <option>Opisto</option>
                  <option>Ylioppilastutkinto</option>
                  <option>Alempi korkeakoulututkinto</option>
                  <option>Ylempi korkeakoulututkinto</option>
                  <option>Ei mikään näistä (Selitä alempana tarkemmin)</option>
              </select>
              <br></br>
              <label>Tutkintonimike</label>
              <input type="text"></input>
              <br></br>
              <label>Kerro kolmella lauseella, millainen työntekijä olisit</label>
              <textarea></textarea>
              <label>Lataa liite</label>
              <input type="file"></input>
              <Button handleClick={handleRightClick} text="Lähetä" />
            </form>
            <br></br>
          </div>
        </div>
      );
    }

/*Here is the state if the button has been pressed*/
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
