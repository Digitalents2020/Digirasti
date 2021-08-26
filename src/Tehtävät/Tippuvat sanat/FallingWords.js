import React from "react";
import "./FallingWords.css";
import { useState } from "react";
import Timer from "./Timer";
import {AnimatePresence,motion} from "framer-motion"

var words = ["juosta","laukata","hyppiä","iloita","olla",
                "miettiä","ampua","juoda","keskustella",
                "apu","koira","kissa","miksi","yksi","kalja"
                ,"puro","auto","poika","tyttö","isä","äiti",
                "joki","joskus","kisa","pilkki","onki",
                "ei","hai","he","hius","hän","häät","ien","ja","jae"
                ,"jaosto","jo","jos","jää","koe","koi","kuin","kun",
                "kuu","kyy","luo","luu","maa","me","mies",
                "muu","myös","ne","niin","noin","nuo","nyt","näin",
                "pian","pii","pois","puu","päin","pää","rae",
                "ruis","saos","se","seis","seos","siis","suo","suu",
                "syy","syys","säe","sää","taas","tae","tai","taos",
                "te","tee","teos","tie","tuo","työ","täi",
                "vaan","vai","vain","voi","vyö","yö"
              ];
              
var arrayOfWords = [ ];
var points = 0;
var lives = 10;
var difficultySetting = 2500;
var location = 0
var id = 10
var wordToSearch = ''
var firstTime = false
let userAgentString = navigator.userAgent;
let firefoxAgent = userAgentString.indexOf("Firefox") > -1;

function FallingWords() {
  const [state, setState] = useState("");
  const [start, setStart] = useState(true);
  // eslint-disable-next-line
  const [cleanFallen, setCleanFallen] = useState("")
  

  //Sets starting values and change the state for rerender
  function startGame(difficulty) {
    if(difficulty==='helppo'){
      difficultySetting = 5000
     
    }else if(difficulty==='normaali'){
      difficultySetting = 3500
      
    }else if(difficulty==='vaikea'){
      difficultySetting = 2500
     
    }else{
       difficultySetting = 1500
      
    }
    arrayOfWords = [];
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
    arrayOfWords = [];
    points=0;
    lives=10;
    firstTime = true
    setStart(true);
    setState("try")
  }


  const handler = (event) => {
    setState(event.target.value);
  };

  /*Checks if the call for new word is valid, if it is makes a new 
  word, gives it a id and push it to the array. Everytime, regardless
  if the call is valid, returns all the existing words in the array.*/
  function newWord(ready) {
    if (ready === true || firstTime === true) {
      var num = Math.floor(Math.random() * words.length);
      var lett = words[num];
      firstTime = false
      if(id<99){
      id++
      }else{
        id = 10
      }
      lett = id + lett
      arrayOfWords.push(lett);
      ready=false
      setTimeout(function() {
        cleanFallenLetter(lett);
    }, 15200)
    } 
    if (lives > 0){
      if(firefoxAgent){
        location = randomIntFromInterval(20, 800)
      }else{
      location = randomIntFromInterval(-380, 370)
      }
      return ( <AnimatePresence >
      {arrayOfWords.map((letter) =>
        <motion.div key={letter}
        initial={{y:0, x:location}}
        animate={{y:490,
          transitionEnd:{backgroundColor: "#D2042D"}}}
        transition={{duration:15}}
        className="lettersWords">{letter.substring(2)}
        </motion.div>)}
       </AnimatePresence>)
    }else {
      setState("lost");
    }}

    /*Checks if the pressed letter(state) exist in the array
    and if it does removes the letter from the array and awards a point.
    Otherwise takes one live.*/
  function cleanUpLetter(e) {
    e.preventDefault();
    for(var i=0;i<arrayOfWords.length;i++){
      var container = arrayOfWords[i]
      if(container.substring(2) === state){
        wordToSearch = container
        break
      }
    }
    var index = arrayOfWords.indexOf(wordToSearch);
    if (arrayOfWords.indexOf(wordToSearch) >= 0) {
        arrayOfWords.splice(index, 1);
      points = points + wordToSearch.length - 2;
      document.getElementById('wordInputWords').value = ''
      setState("")
    }else if (state !=="" && state !== "try"){
      lives--
      document.getElementById('wordInputWords').value = ''
      setState("")
    }
  }


    /*Removes letter from array. Is called when making new letter and
    contains 15sec timeout, so the letter is removed when letter hit the
    ground, if it still exist.*/
  function cleanFallenLetter(letter) {
    var index = arrayOfWords.indexOf(letter);
    if (arrayOfWords.indexOf(letter) >= 0) {
        arrayOfWords.splice(index, 1);
     lives--;
     setCleanFallen(letter)
    }}

  
  /*Set values back to starting values*/
  function tryAgain() {
    arrayOfWords = [];
    points=0;
    lives=10;
    firstTime = true
    setState("try");
  }

/*If first render or coming to change difficulty, renders the start menu,
otherwise renders game mechanics. If lives hit 0, renders game over menu.*/
  if (start === false) {
    if (lives > 0) {
      return (
        <div className="fallingWords">
          <div className="canvas1Words">
            <div className="letterClassWords">
            <Timer word={newWord} arrayOfWords={arrayOfWords} difficulty={difficultySetting} />
            </div>
            <form onSubmit={cleanUpLetter}>
              <input className="wordInputWords" id="wordInputWords" onChange={handler} autoFocus={true} onBlur={({ target }) => target.focus()}/>
             <button type="submit" className="hidebuttonWords" ></button>
             </form>
            <div className="uiDivWords">
              <p className="uiWords">Pisteet: {points}</p>
              <p className="uiWords">Elämät: {lives}</p>
              </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="fallingWords">
          <div className="canvas1Words">
          <div className="letterClass_lostWords">
            <h1 className="pisteetWords">Pisteesi: {points}</h1>
            <p className="letters_lostWords">Valitettavasti elämäsi loppuivat!</p>
            </div>
            <div className="GameOverButtonsDivWords">
            <button className="tryWords" onClick={tryAgain}>
              Yritä uudelleen
            </button>
            <button className="tryWords" onClick={changeDifficulty}>
              Vaihda vaikeusastetta
            </button>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="fallingWords">
        <div className="canvasWords">
          <h1 className="otsikkoWords">Tippuvat sanat</h1>
          <div className="ohjeWords">
            <h3 className="ohjetxtWords">Ohje:</h3>
          <p>Tehtävänäsi on kirjoittaa näppäimistölläsi samoja sanoja, jotka näet ruudulla.
            <br />Kirjoita sana sille varatulle kentälle ja paina näpäimistöstäsi ENTER painiketta.
            <br />Väärän sanan kirjoittaessasi menetät elämän, jos elämät menevät nollaan häviät. 
           <br /> Menetät myös elämän jos sanat tippuvat alas asti. 
           <br /> <br /> <b>Onnea peliin!</b>
          </p>
          </div>
          <div className="vaikeusTekstiWords"><br /><b>Valitse vaikeusaste:</b>
          <button className="startbtnWords" onClick={() => startGame('helppo')}>
            Helppo
          </button>
          <button className="startbtnWords" onClick={() => startGame('normaali')}>
            Normaali
          </button>
          <button className="startbtnWords" onClick={() => startGame('vaikea')}>
            Vaikea
          </button>
          <button className="startbtnWords" onClick={() => startGame('mahdoton')}>
            Mahdoton
          </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FallingWords;