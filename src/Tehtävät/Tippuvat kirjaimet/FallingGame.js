import React from "react";
import "./FallingGame.css";
import { useState } from "react";
import Clock from "./Clock";
import {AnimatePresence,motion} from "framer-motion"
import {Link } from "react-router-dom";


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
var difficultySetting = 4500;
var location = 0
var id = 10
var letterToSearch = ''
var firstTime = false
let userAgentString = navigator.userAgent;
let firefoxAgent = userAgentString.indexOf("Firefox") > -1;
var capslockpaalla = false
var animLenght = 10
var timeoutLenght = 10200

function FallingGame() {
  const [state, setState] = useState("");
  const [start, setStart] = useState(true);
  // eslint-disable-next-line
  const [cleanFallen, setCleanFallen] = useState("")
  
  

  //Sets starting values and change the state for rerender
  function startGame(difficulty) {
    if(difficulty==='helppo'){
      difficultySetting = 4500
      letters=lettersPienet
    }else if(difficulty==='normaali'){
      difficultySetting = 3500
      letters=lettersPienet
    }else if(difficulty==='vaikea'){
      difficultySetting = 2500
      letters=lettersMyosIsot
    }else{
       difficultySetting = 2000
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
    event.preventDefault();
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

      if(points%20===0 && points > 0 && animLenght > 1 && timeoutLenght > 1200){
        animLenght = animLenght - 1
        timeoutLenght = timeoutLenght - 1000
      }

      console.log(timeoutLenght)
      setTimeout(function() {
        cleanFallenLetter(lett);
    }, timeoutLenght)
    } 
    if (lives > 0){
      if(firefoxAgent){
        location = randomIntFromInterval(0, 800)
      }else{
      location = randomIntFromInterval(-400, 400)
      }
      console.log(animLenght)
      return ( <AnimatePresence >
      {arrayOfLetters.map((letter) =>
        <motion.div key={letter}
        id={letter}
        initial={{y:0, x:location}}
        animate={{y:502,
          transitionEnd:{backgroundColor: "#BD2719"}}}
        transition={{duration:animLenght,ease:"linear"}}
        exit={{}}
        className="lettersGame">{letter.charAt(2)}
        </motion.div>)}
       </AnimatePresence>)
    }else {
      setState("lost");
    }}


function stopAndFlashGreen(letterToSearch, left, top){
  var div = document.createElement('div');
  div.id = letterToSearch;
  div.innerHTML = letterToSearch.charAt(2)
  div.className = "lettersGame"
  div.style.backgroundColor = '#009246'
  var scrolledFromTop = window.pageYOffset
  var scrolledFromLeft= window.pageXOffset
  div.style.left = left + scrolledFromLeft + "px"
  div.style.top = top + scrolledFromTop + "px"
  document.getElementById('letterClassGame').appendChild(div);
 setTimeout(function() {
  var myobj = document.getElementById(letterToSearch);
  myobj.remove();
}, 200)
}

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
      var element = document.getElementById(letterToSearch)
      var rect = element.getBoundingClientRect();
      var top = rect.y
      var left = rect.x
      stopAndFlashGreen(letterToSearch,left,top)
    }
    if (arrayOfLetters.indexOf(letterToSearch) >= 0) {
      points++;
      capslockpaalla = false
      arrayOfLetters.splice(index, 1)

      if( document.getElementById('letterClassGame')!=null){
        document.getElementById('letterClassGame').style.borderColor = '#009246' ; 
        setTimeout(function() {
            if(document.getElementById('letterClassGame')!=null){
            document.getElementById('letterClassGame').style.borderColor = '#9FC9EB' ; 
        }
        }, 200)
      }
    }else if (state !=="" && state !== "try"){
      lives--
      if((difficultySetting===4500 || difficultySetting===3500) && ((state.charCodeAt(0) >= 65 && state.charCodeAt(0) <= 90) || 
      state.charCodeAt(0) === 197 || state.charCodeAt(0) === 196
       || state.charCodeAt(0) === 214)){
         capslockpaalla = true
       }


      if(document.getElementById('letterClassGame')!=null){
          document.getElementById('letterClassGame').style.borderColor = '#BD2719' ; 
          setTimeout(function() {
              if(document.getElementById('letterClassGame')!=null){
              document.getElementById('letterClassGame').style.borderColor = '#9FC9EB' ; }
          }, 200)}
    }
  }


/*checks if Caps Lock is on and gives a reminder to turn it off*/
  function capslockvaroitus(){
    if(capslockpaalla){
    return <div className="vinkkiGame" id="vinkkiGame">Laita Caps Lock pois päältä</div>
    }
  }

    /*Removes letter from array. Is called with timeout
    when making new letter, so the letter is removed when it hits the
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
          <div className="canvasGame">
            <h1 className="otsikkoWords">Tippuvat kirjaimet</h1>
            <div className="containerBlockGame">
              <div className="letterClassGame" id="letterClassGame">
              <Clock letter={newLetter} arrayOfLetters={arrayOfLetters} difficulty={difficultySetting} />
              </div>
              {cleanUpLetter()}
              {capslockvaroitus()}
              <div className="uiDivGame">
                <p className="uiGame">Pisteet: {points}</p>
                <p className="uiGame">Elämät: {lives}</p>
              </div>
            </div>
            <input className="hideGame" id="hideGame" onKeyPress={(e) => handler(e)} autoFocus={true}  onBlur={({ target }) => setTimeout(
                  function () {target.focus({preventScroll:true})},2)}></input>
              {clearState()}
          </div>
        </div>
      );
    } else {
      return (
        <div className="fallingGame">
          <div className="canvasGame">
          <h1 className="otsikkoWords">Tippuvat kirjaimet</h1>
          <div className="containerBlockGame">
            <div className="letterClass_lostGame">
              <h3 className="letters_lostGame">Valitettavasti elämäsi loppuivat!</h3>
              <h1 className="pisteetGame">Pisteesi: {points}</h1>
            </div>
            <button className="tryGame" onClick={tryAgain}>
              Yritä uudelleen
            </button>
            <button className="tryGame" onClick={changeDifficulty}>
              Vaihda vaikeusastetta
            </button>
            </div>
            <Link to="/tippuvat_sanat" className="NextPrac"
              role="button">Seuraava tehtävä</Link>
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
            <h2 className="ohjetxtGame">Ohje:</h2>
            <p>Tehtävänäsi on painaa näppäimistöstäsi samoja kirjaimia, jotka näet ruudulla. 
            Väärää kirjainta painaessasi menetät elämän, jos elämät menevät nollaan häviät. 
            Menetät myös elämän jos kirjaimet tippuvat alas asti. <strong>Onnea peliin!</strong>
            </p>
          </div>
          <div className="vaikeusTekstiGame">
            <b>Valitse vaikeusaste:</b><br />
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