import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Tehtava2 = () => {
  const [counter, setCounter] = useState(0);
  const [taskTimer, countTaskTimer] = useState("00:00");
  const [taskText, setTaskText] = useState("");

  let correctValue =
    "Tässä tehtävässä harjoittelen kirjoittamaan tietokoneen näppäimistöllä. Opin käyttämään isoja ja pieniä kirjaimia sekä erikoismerkkejä! Kun olen oppinut kirjoittamaan tietokoneella sujuvasti, voin kirjoittaa työhakemuksen minua kiinnostavaan työpaikkaan. Mistä saisin apua ansioluettelon tekemiseen?";
  setTimeout(() => {
    laskurifunktio();
  }, 1000);

  const laskurifunktio = () => {
    setCounter(counter + 1);
  };

  const aikatulosfunktio = () => {
    let minutes = Math.floor(counter / 60);
    let seconds = counter - minutes * 60;
    if (seconds < 10) seconds = "0" + seconds;

    let resultTime = minutes + ":" + seconds;
    countTaskTimer(resultTime);
  };

  const textChangeEvent = (event) => {
    setTaskText(event.target.value);
    aikatulosfunktio();
  };

  const aloitusAlustaFunktio = () => {
    if (window.confirm(`Oletko varma että haluat aloittaa alusta?`)) {
      setTaskText("");
    }
  };

  const tarkistaFunktio = () => {
    if (taskText === correctValue) {
      alert(
        `Hienoa, olet tehnyt tämän tehtävän onnistuneesti!\nAikaa sinulla tähän tehtävään meni ${taskTimer}.\n\nVoit nyt jatkaa seuraavaan tehtävään.\nSulkeaksesi tämän ilmoituksen, paina OK-painiketta.`
      );
    } else {
      alert(
        "Tekstissä on virheitä. Tarkista että olet kirjoittanut tehtävän oikein."
      );
    }
  };

  return (
    <div>
      <div className="mainPageFrame">
        <div className="innerPageFrame">
          <h1 className="pageHeader">Kirjoitustehtävä</h1>
          <div className="pageContentFrame">
            <h2 className="infoHeader">Ohje:</h2>
            <p>
              Kirjoita seuraava teksti alla olevaan kenttään. Teksti antaa
              sinulle vihjeitä, miten voit toimia, kun kirjoitat tekstiä. Kun
              olet valmis, paina "Tarkista"-näppäintä.
            </p>
          </div>
          <div className="pageContentFrame">
            <h3 className="exerciseHeader">Kirjoitettava teksti:</h3>
            <p>
              Tässä tehtävässä harjoittelen kirjoittamaan tietokoneen
              näppäimistöllä. Opin käyttämään isoja ja pieniä kirjaimia sekä
              erikoismerkkejä! Kun olen oppinut kirjoittamaan tietokoneella
              sujuvasti, voin kirjoittaa työhakemuksen minua kiinnostavaan
              työpaikkaan. Mistä saisin apua ansioluettelon tekemiseen?
            </p>
            <br />
            <textarea
              className="textWritingArea mediumTextarea"
              onChange={textChangeEvent}
              value={taskText}
              placeholder="Klikkaa tähän aloittaaksesi kirjoittamisen"
            />
            <button
              className="actionButton"
              onClick={aloitusAlustaFunktio}
              type="reset"
            >
              Aloita alusta
            </button>
            <button className="checkButton" onClick={tarkistaFunktio}>
              Tarkista
            </button>
          </div>
        </div>
        <Link to="/Tehtava1" className="nextPracButton" role="button">
          Seuraava tehtävä
        </Link>
      </div>
    </div>
  );
};
export default Tehtava2;
