import React from "react";
import "./FallingGame.css";
import { useState } from "react";
import Counter from "./Clock";

var letters = ["a","b","c","d","e","f","g","h","i",
                "j","k","l","m","n","o","p","q","r",
                "s","t","u","v","w","x","y","z","ä","ö",
              ];

var arrayOfLetters = [];
var lettercount = 0;
var pisteet = 0;
var lives = 11;
var vaikeusaste = 1000;

function FallingGame() {
  const [state, setState] = useState("");
  const [aloitus, setAloitus] = useState(true);

  function aloita(a) {
    vaikeusaste=a;
    lettercount = 0;
    arrayOfLetters = [];
    pisteet=0;
    lives=11;
    setAloitus(false);
  }
  
  function vaihdaVaikeus() {
    lettercount = 0;
    arrayOfLetters = [];
    pisteet=0;
    lives=11;
    setAloitus(true);
  }



  const handler = (event) => {
    setState(event.key);
  };

  function newLetter() {
    if (lettercount < 10) {
      var num = Math.floor(Math.random() * letters.length);
      var lett = letters[num];
      arrayOfLetters.push(lett);
      lettercount++;
      return <p className="letters">{arrayOfLetters}</p>;
    } else {
      setState("lost");
    }
  }

  function cleanUpLetter() {
    var index = arrayOfLetters.indexOf(state);
    if (arrayOfLetters.indexOf(state) >= 0) {
      arrayOfLetters.splice(index, 1);
     lettercount--;
     pisteet++;
    }else{
      lives--
    }
  }

  function tryAgain() {
    lettercount = 0;
    arrayOfLetters = [];
    pisteet=0;
    lives=11;
    setState("");
  }

  if (aloitus === false) {
    if (lettercount < 10 && lives > 0) {
      return (
        <div className="falling">
          <div className="canvas">
            <Counter letter={newLetter} arrayOfLetters={arrayOfLetters} vaikeus={vaikeusaste} />
            {cleanUpLetter()}
            <p>Key pressed is: {state}</p>
            <p>Pisteet: {pisteet}</p>
            <p>Elämät: {lives}</p>
            <input
              className="hide"
              onKeyPress={(e) => handler(e)}
              autoFocus={true}
              onBlur={({ target }) => target.focus()}
            ></input>
          </div>
        </div>
      );
    } else {
      return (
        <div className="falling">
          <div className="canvas">
            <p className="letters">{arrayOfLetters} You lost</p>
            <input
              className="hide"
              onKeyPress={(e) => handler(e)}
              autoFocus={true}
              onBlur={({ target }) => target.focus()}
            ></input>
            <button className="try" onClick={tryAgain}>
              Yritä uudelleen
            </button>
            <button className="try" onClick={vaihdaVaikeus}>
              Vaihda vaikeusastetta
            </button>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="falling">
        <div className="canvas">
          <h1 className="otsikko">Tippuvat kirjaimet</h1>
          <p>Tehtävänäsi on painaa näppäimistöstäsi samoja näppäimiä, jotka näet ruudulla.
            <br />Väärää näppäintä painaessasi menetät elämän, jos elämät menevät nollaan häviät. 
           <br /> Menetät myös elämän jos kirjaimet tippuvat alas asti. 
           <br /> <br /> <b>Onnea peliin!</b>
          </p>
          <div><br /><b>Valitse vaikeusaste:</b>
          <button className="startbtn" onClick={() => aloita(2000)}>
            Helppo
          </button>
          <button className="startbtn" onClick={() => aloita(1500)}>
            Normaali
          </button>
          <button className="startbtn" onClick={() => aloita(800)}>
            Vaikea
          </button>
          <button className="startbtn" onClick={() => aloita(500)}>
            Mahdoton
          </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FallingGame;
