import React, { useState } from "react";
import "./Email.css";

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
            Tässä tehtävässä opetellaan sähköpostin kirjoittamista ja
            liittetiedoston liittämistä. Sähköpostissa on aina kolme eri osaa:
            Vastaanottaja, aihe ja itse viesti. Joskus tarpeen on neljäs osa
            joka on liitetiedosto. Tehtävänäsi on kirjoittaa pienimuotoinen
            työhakemus vastaanottajalle esimerkki.makkonen@testi-pesti.fi ja
            muistathan myös liittää CV:si sähköpostin liitteeksi!
          </p>
          <p>Huomioitavaa: Joskus sähköpostien liitteen nappulassa on vain paperiliittimen eli klemmarin kuva, älä siis hätäänny, jos tässä tehtävässä käytettävää nappia ei tosielämän sähköposteista löydy.</p>
          <p>Ei huolta, kirjoittamasi hakemus ei oikeasti lähde mihinkään</p>
          <h5>Sähköposti</h5>
          <br></br>
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
            <br></br>
          </div>
        </div>
      );
    }

    /*Here is the state if the button has been pressed*/
    return (
      <div className="form-box">
        <p>
          Hienoa! Näin kirjoitat ja lähetät sähköpostin ja lisäät siihen liitteen! Voit nyt siirtyä
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
