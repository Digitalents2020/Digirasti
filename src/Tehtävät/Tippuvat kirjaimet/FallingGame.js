import React from "react";
import "./FallingGame.css";
import { useState } from "react";
import Clock from "./Clock";

var letters = ["a","b","c","d","e","f","g","h","i",
                "j","k","l","m","n","o","p","q","r",
                "s","t","u","v","w","x","y","z","ä","ö",
              ];

var arrayOfLetters = [];
var lettercount = 0;
var firsttime = true;

function FallingGame() {
  const [state, setState] = useState("");
  const [aloitus, setAloitus] = useState("");

  function aloita() {
    firsttime = false;
    setAloitus("Aloitettu");
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
      lettercount = lettercount - 2;
    }
  }

  function tryAgain() {
    lettercount = 0;
    arrayOfLetters = [];
    setState("");
  }

  if (firsttime === false) {
    if (lettercount < 10) {
      return (
        <div className="falling">
          <div className="canvas">
            <Clock letter={newLetter} />
            {cleanUpLetter()}
            <p>Key pressed is: {state}</p>
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
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="falling">
        <div className="canvas">
          <button className="startbtn" onClick={aloita}>
            Aloita peli
          </button>
        </div>
      </div>
    );
  }
}

export default FallingGame;
