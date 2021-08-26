import React from "react";
import "./FallingGame.css";
import { useState } from "react";
import Clock from "./Clock";
import {AnimatePresence,motion} from "framer-motion"


var letters = ""; 
var lettersPienet = ["a","b","c","d","e","f","g","h","i",
                "j","k","l","m","n","o","p","q","r",
                "s","t","u","v","w","x","y","z","ä","ö",
              ];

var lettersMyosIsot = ["a","b","c","d","e","f","g","h","i",
              "j","k","l","m","n","o","p","q","r",
              "s","t","u","v","w","x","y","z","ä","ö",
              "A","B","C","D","E","F","G","H","I",
              "J","K","L","M","N","O","P","Q","R",
              "S","T","U","V","W","X","Y","Z","Ä","Ö",
            ];
var lettersIsotJaErikois = ["a","b","c","d","e","f","g","h","i",
            "j","k","l","m","n","o","p","q","r",
            "s","t","u","v","w","x","y","z","ä","ö",
            "A","B","C","D","E","F","G","H","I",
            "J","K","L","M","N","O","P","Q","R",
            "S","T","U","V","W","X","Y","Z","Ä","Ö",
            "/","*","&","-",".",",","€","$","+","?",
            "=","(",")",
          ];


var arrayOfLetters = [ ];
var points = 0;
var lives = 10;
var difficultySetting = 2500;
var location = 0
var id = 10
var letterToSearch = ''
var firstTime = false
let userAgentString = navigator.userAgent;
let firefoxAgent = userAgentString.indexOf("Firefox") > -1;

function FallingGame() {
  const [state, setState] = useState("");
  const [start, setStart] = useState(true);
  // eslint-disable-next-line
  const [cleanFallen, setCleanFallen] = useState("")
  
  

  //Sets starting values and change the state for rerender
  function startGame(difficulty) {
    if(difficulty==='helppo'){
      difficultySetting = 3000
      letters=lettersPienet
    }else if(difficulty==='normaali'){
      difficultySetting = 2500
      letters=lettersPienet
    }else if(difficulty==='vaikea'){
      difficultySetting = 1500
      letters=lettersMyosIsot
    }else{
       difficultySetting = 1500
        letters=lettersIsotJaErikois
    }
    arrayOfLetters = [];
    points=0;
    lives=10;
    setStart(false);
  }
  
  //return random int between min and max
  function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

//takes back to starting screen, where player can change difficulty
  function changeDifficulty() {
    arrayOfLetters = [];
    points=0;
    lives=10;
    firstTime = true
    setStart(true);
    setState("try")
  }


  const handler = (event) => {
    setState(event.key);
  };

  /*Checks if the call for new letter is valid, if it is makes a new 
  letter, gives it a id and push it to the array. Everytime regardless
  if the call is valid returns all the existing letters in the array.*/
  function newLetter(ready) {
    if (ready === true || firstTime === true) {
      var num = Math.floor(Math.random() * letters.length);
      var lett = letters[num];
      firstTime = false
      if(id<99){
      id++
      }else{
        id = 10
      }
      lett = id + lett
      arrayOfLetters.push(lett);
      ready=false
      setTimeout(function() {
        cleanFallenLetter(lett);
    }, 10000)
    } 
    if (lives > 0){
      if(firefoxAgent){
        location = randomIntFromInterval(0, 800)
      }else{
      location = randomIntFromInterval(-400, 400)
      }
      return ( <AnimatePresence >
      {arrayOfLetters.map((letter) =>
        <motion.div key={letter}
        initial={{y:0, x:location}}
        animate={{y:490,
          transitionEnd:{display: "none"}}}
        transition={{duration:10}}
        className="lettersGame">{letter.charAt(2)}
        </motion.div>)}
       </AnimatePresence>)
    }else {
      setState("lost");
    }}


    /*Checks if the pressed letter(state) exist in the array
    and if it does removes the letter from the array and awards a point.
    Otherwise takes one live.*/
  function cleanUpLetter() {
    for(var i=0;i<arrayOfLetters.length;i++){
      var container = arrayOfLetters[i]
      if(container.charAt(2) === state){
        letterToSearch = container
        break
      }
    }
    var index = arrayOfLetters.indexOf(letterToSearch);
    if (arrayOfLetters.indexOf(letterToSearch) >= 0) {
      arrayOfLetters.splice(index, 1);
      points++;
    }else if (state !=="" && state !== "try"){
      lives--
    }
  }

    /*Removes letter from array. Is called when making new letter and
    contains 15sec timeout, so the letter is removed when letter hit the
    ground, if it still exist.*/
  function cleanFallenLetter(letter) {
    var index = arrayOfLetters.indexOf(letter);
    if (arrayOfLetters.indexOf(letter) >= 0) {
      arrayOfLetters.splice(index, 1);
     lives--;
     setCleanFallen(letter)
    }}

  
  /*Set values back to starting values*/
  function tryAgain() {
    arrayOfLetters = [];
    points=0;
    lives=10;
    firstTime = true
    setState("try");
  }

  /*clears the state after every render,
   so it is possible to press same key more than once and remove
   all the matching letters*/
  function clearState() {
    if (state!==""){
    setState("");
    }
  }

/*If first render or coming to change difficulty, renders the start menu,
otherwise renders game mechanics. If lives hit 0, renders game over menu.*/
  if (start === false) {
    if (lives > 0) {
      return (
        <div className="fallingGame">
          <div className="canvas1Game">
            <div className="letterClassGame">
            <Clock letter={newLetter} arrayOfLetters={arrayOfLetters} difficulty={difficultySetting} />
            </div>
            {cleanUpLetter()}
              <p className="uiGame">Pisteet: {points}</p>
              <p className="uiGame">Elämät: {lives}</p>
            <input
              className="hideGame"
              onKeyPress={(e) => handler(e)}
              autoFocus={true}
              onBlur={({ target }) => target.focus()}
            ></input>
            {clearState()}
          </div>
        </div>
      );
    } else {
      return (
        <div className="fallingGame">
          <div className="canvas1Game">
          <div className="letterClass_lostGame">
            <h1 className="pisteetGame">Pisteesi: {points}</h1>
            <p className="letters_lostGame">Valitettavasti elämäsi loppuivat!</p>
            </div>
            <input
              className="hideGame"
              onKeyPress={(e) => handler(e)}
              autoFocus={true}
              onBlur={({ target }) => target.focus()}
            ></input>
            <button className="tryGame" onClick={tryAgain}>
              Yritä uudelleen
            </button>
            <button className="tryGame" onClick={changeDifficulty}>
              Vaihda vaikeusastetta
            </button>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="fallingGame">
        <div className="canvasGame">
          <h1 className="otsikkoGame">Tippuvat kirjaimet</h1>
          <div className="ohjeGame">
            <h3 className="ohjetxtGame">Ohje:</h3>
          <p>Tehtävänäsi on painaa näppäimistöstäsi samoja kirjaimia, jotka näet ruudulla.
            <br />Väärää kirjainta painaessasi menetät elämän, jos elämät menevät nollaan häviät. 
           <br /> Menetät myös elämän jos kirjaimet tippuvat alas asti. 
           <br /> <br /> <b>Onnea peliin!</b>
          </p>
          </div>
          <div className="vaikeusTekstiGame"><br /><b>Valitse vaikeusaste:</b>
          <button className="startbtnGame" onClick={() => startGame('helppo')}>
            Helppo
          </button>
          <button className="startbtnGame" onClick={() => startGame('normaali')}>
            Normaali
          </button>
          <button className="startbtnGame" onClick={() => startGame('vaikea')}>
            Vaikea
          </button>
          <button className="startbtnGame" onClick={() => startGame('mahdoton')}>
            Mahdoton
          </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FallingGame;