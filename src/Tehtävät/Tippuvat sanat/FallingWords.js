import React from "react";
import "./FallingWords.css";
import { useState } from "react";
import Timer from "./Timer";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

var words = "";
var wordsEasy = [
  "juosta","laukata", "hyppiä","iloita","olla","miettiä","ampua","juoda","keskustella","apu","koira","kissa","miksi","yksi",
  "kalja", "puro","auto","poika","tyttö","isä","äiti","joki","joskus","kisa","pilkki","onki","ei","hai","he","hius","hän",
  "häät","ien","ja","jae","jaosto","jo","jos","jää","koe","koi","kuin","kun","kuu","kyy","luo","luu","maa","me","mies","muu",
  "myös","ne","niin","noin","nuo","nyt","näin","pian","pii","pois","puu","päin","pää","rae","ruis","saos","se","seis","seos",
  "siis","suo","suu","syy","syys","säe","sää","taas","tae","tai","taos","te","tee","teos","tie","tuo","työ",
  "täi","vaan","vai","vain","voi","vyö","yö",
];

var wordsHard = [
  "Aamutähti", "aamuvirkku","aamuvuoro","Aaltoviiva","aakkoset","absoluutti","adventti","Afrikka","aiheuttaja","aikuistua","aistikas",
  "aivoriihi","Aivastaa","aivopähkinä","Aaltokuvio","alikersantti","alitajunta","alijäämä","alennus","allekirjoittaa","ALV","Laiskistua",
  "anemia","anniskelu","appiukko","anoppi","BMW","Banaani","Bataatti","Bakteeri","bambu","baretti","barista","Betoni","biljardi","biojäte",
  "Boakäärme","budjetti","buffetti","Celsius","Curry","Costa Rica","Datanomi","Delfiini","desibeli","Diktaattori","diplomaatti","dippikastike",
  "dobermanni","DNA-testi","dopingtesti","duunari","edamjuusto","Edellytys","eettisyys","Eduskunta","demonstroida","design","devaaja",
  "digitaalinen","dokumentoida","domino","dynamiitti","dramaattinen","elohopea","eliökunta","eläinperäinen","eläinrakas","emulaattori",
  "epäreilu","Etelä-Korea","Etikkahappo","Fanaattinen","Flegmaattisuus","fyysinen","Galaksi","geeniterapia","gratinoida","haaskalintu",
  "haastemies","Haarapääsky","hajaantuminen","heilahdus","Hedelmöittyä","Hektinen","helikopteri","hieskoivu","Hopeahäät","hopeakaivos",
  "ihailtavasti","ihmeellisyys","Ikipäiviksi","ikkunalauta","imperialismi","Jakojäännös","Jengiläinen","jokainen","Jongleerata",
  "Jälkiuuni","Jyrkänne","Kaalinkerä","Kaatopaikka","Kiharrin","Kirkollisvero","Kolikonheitto","Kullanmuru","Kvanttikemia","käpristellä",
  "laillistaa","lakritsijuuri","Legioona","lennonjohto","lohkolämmitin","Lottovoitto","lumimyrsky","lähimaksu","lämmityslaite","Maakellari",
  "Maakreivi","Magneetti","Moninainen","Menneisyys","Mökki","Märkätila","Näkymätön","Nälkäinen","Neilikka","näennäisesti","Nuolisade",
  "Naiivi","Nälkälakko","Nautinto","Olematon","Oikeamielinen","Odotusaika","Olemassaolo","Oleskelulupa","Ompelukone","Opettaminen",
  "Päällikkö","Painepesuri","Palautustölkki","Pallogrilli","Pelastusvene","Perkolaattori","Piispanhattu","Pikkutarkka","Poliisivoimat",
  "Rikollisuus","Rakastua","Radiotaajuus","Raivokohtaus","Rettelöitsijä","rikkidioksidi","Romutuspalkkio","Rullalauta","Saapuminen",
  "Sairaalassa","Seinäkello","Siirappinen","Sekajäte","Säälittävä","Sörnäinen","tahdittomuus","Tekohampaat","Terveystieto","Täsmätieto",
  "Taistelu","Terminaattori","Tietyömaa","Uhmakkuus","Uimarengas","Ulkoilma","Urakoitsija","Uuttera","Vaakataso","Vaalikausi","Velkavankeus",
  "verikoe","Verovirkailija","Viittomakieli","Vuokravakuus","Väestönkasvu","Yritys","Yksilöllisyys","Yleisurheilija","yöperhonen","Zoomi",
  "Äkkipikainen","Äimänkäkenä","Ärsyyntyä","Äyskäröinti","Ääntenlasku","Öljyntuotanto","Öykkäröidä","Öljyvoimala","Öyhöttäjä"
];

var arrayOfWords = [];
var points = 0;
var lives = 10;
var difficultySetting = 2500;
var location = 0;
var id = 10;
var wordToSearch = "";
var firstTime = false;
let userAgentString = navigator.userAgent;
let firefoxAgent = userAgentString.indexOf("Firefox") > -1;
var capslockpaalla = false;
var animLenght = 15;
var timeoutLenght = 15200;

function FallingWords() {
  const [state, setState] = useState("");
  const [start, setStart] = useState(true);
  // eslint-disable-next-line
  const [cleanFallen, setCleanFallen] = useState("");

  //Sets starting values and change the state for rerender
  function startGame(difficulty) {
    if (difficulty === "helppo") {
      difficultySetting = 5000;
      words = wordsEasy;
    } else if (difficulty === "normaali") {
      difficultySetting = 3500;
      words = wordsEasy;
    } else if (difficulty === "vaikea") {
      difficultySetting = 3000;
      words = wordsHard;
    } else {
      difficultySetting = 2500;
      words = wordsHard;
    }
    arrayOfWords = [];
    points = 0;
    lives = 10;
    setStart(false);
  }

  //return random int between min and max
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //takes back to starting screen, where player can change difficulty
  function changeDifficulty() {
    arrayOfWords = [];
    points = 0;
    lives = 10;
    firstTime = true;
    setStart(true);
    setState("try");
  }

  //Sets state to reflect the typed word
  const handler = (event) => {
    event.preventDefault();
    setState(event.target.value);
  };

  /*Checks if the call for new word is valid, if it is makes a new 
  word, gives it a id and push it to the array. Everytime, regardless
  if the call is valid, returns all the existing words in the array.*/
  function newWord(ready) {
    if (ready === true || firstTime === true) {
      var num = Math.floor(Math.random() * words.length);
      var lett = words[num];
      firstTime = false;
      if (id < 99) {
        id++;
      } else {
        id = 10;
      }
      lett = id + lett;
      arrayOfWords.push(lett);
      ready = false;

      //Every 40 points, shortens the falling time by 1 sec
      if (
        points % 40 === 0 &&
        points > 0 &&
        animLenght > 3 &&
        timeoutLenght > 3200
      ) {
        animLenght = animLenght - 1;
        timeoutLenght = timeoutLenght - 1000;
      }

      console.log(timeoutLenght);
      setTimeout(function () {
        cleanFallenLetter(lett);
      }, timeoutLenght);
    }
    if (lives > 0) {
      if (firefoxAgent) {
        if(difficultySetting <= 3000){
          location = randomIntFromInterval(20, 750);
        }else{
        location = randomIntFromInterval(20, 800);
        }
      } else {
        if(difficultySetting <= 3000){
          location = randomIntFromInterval(-380, 260);
        }else{
        location = randomIntFromInterval(-380, 370);
        }
      }
      console.log(animLenght);
      return (
        <AnimatePresence>
          {arrayOfWords.map((letter) => (
            <motion.div
              key={letter}
              id={letter}
              initial={{ y: 0, x: location }}
              animate={{
                y: 502,
                transitionEnd: { backgroundColor: "#BD2719" },
              }}
              transition={{ duration: animLenght, ease: "linear" }}
              className="lettersWords"
            >
              {letter.substring(2)}
            </motion.div>
          ))}
        </AnimatePresence>
      );
    } else {
      setState("lost");
    }
  }

  /*Creates new div based on the word that was deleted from the array, also sets the div's background color to green.
    Gets also the position from the deleted word. After timeout removes the new div*/
  function stopAndFlashGreen(wordToSearch, left, top) {
    var div = document.createElement("div");
    div.id = wordToSearch;
    div.innerHTML = wordToSearch.substring(2);
    div.className = "lettersWords";
    div.style.backgroundColor = "#009246";
    var scrolledFromTop = window.pageYOffset;
    var scrolledFromLeft = window.pageXOffset;
    div.style.left = left + scrolledFromLeft + "px";
    div.style.top = top + scrolledFromTop + "px";
    document.getElementById("letterClassWords").appendChild(div);
    setTimeout(function () {
      var myobj = document.getElementById(wordToSearch);
      myobj.remove();
    }, 200);
  }

  /*Checks if the typed word(state) exist in the array
    and if it does removes the letter from the array and awards a point.
    Otherwise takes one live.*/
  function cleanUpLetter(e) {
    e.preventDefault();
    for (var i = 0; i < arrayOfWords.length; i++) {
      var container = arrayOfWords[i];
      if (container.substring(2) === state) {
        wordToSearch = container;
        break;
      }
    }
    var index = arrayOfWords.indexOf(wordToSearch);
    if (arrayOfWords.indexOf(wordToSearch) >= 0) {
      //Gets position of the rightly typed word that exist in the array, then calls stopAndFlashGreen() function.
      var element = document.getElementById(wordToSearch);
      var rect = element.getBoundingClientRect();
      var top = rect.y;
      var left = rect.x;
      stopAndFlashGreen(wordToSearch, left, top);
      capslockpaalla = false;
      arrayOfWords.splice(index, 1);
      points = points + wordToSearch.length - 2;
      document.getElementById("wordInputWords").value = "";
      changeBorder(true);
      setState("");
    } else if (state !== "" && state !== "try") {
      lives--;
      document.getElementById("wordInputWords").value = "";
      var length = state.length - 1;
      /*If typed word doesnt exist and difficulty is easy or normal,
       checks if capslock is on and sets the caplockpaalla var to true if it is*/
      if (
        (difficultySetting === 5000 || difficultySetting === 3500) &&
        ((state.charCodeAt(0) >= 65 && state.charCodeAt(0) <= 90) ||
          state.charCodeAt(0) === 197 ||
          state.charCodeAt(0) === 196 ||
          state.charCodeAt(0) === 214 ||
          (state.charCodeAt(length) >= 65 && state.charCodeAt(length) <= 90) ||
          state.charCodeAt(length) === 197 ||
          state.charCodeAt(length) === 196 ||
          state.charCodeAt(length) === 214)
      ) {
        capslockpaalla = true;
      }
      changeBorder(false);
      setState("");
    }
  }

  /*Checks if capslockpaalla var is true and gives a reminder to turn Caps Lock off*/
  function capslockvaroitus() {
    if (capslockpaalla) {
      return (
        <div className="vinkkiWords" id="vinkkiWords">
          Laita Caps Lock pois päältä
        </div>
      );
    }
  }

  /*Changes the border to reflect if the typed word exist on the array, to green if it does and red if it doesnt. 
  After short timeout changes it back to blue*/
  function changeBorder(trueOrfalse) {
    if (trueOrfalse === true) {
      if (document.getElementById("letterClassWords") != null) {
        document.getElementById("letterClassWords").style.borderColor =
          "#009246";
        setTimeout(function () {
          if (document.getElementById("letterClassWords") != null) {
            document.getElementById("letterClassWords").style.borderColor =
              "#9FC9EB";
          }
        }, 200);
      }
    } else {
      if (document.getElementById("letterClassWords") != null) {
        document.getElementById("letterClassWords").style.borderColor =
          "#BD2719";
        setTimeout(function () {
          if (document.getElementById("letterClassWords") != null) {
            document.getElementById("letterClassWords").style.borderColor =
              "#9FC9EB";
          }
        }, 200);
      }
    }
  }

  /*Removes word from array. Is called when making new word and
    contains timeout, so the word is removed when it hits the
    ground, if it still exist.*/
  function cleanFallenLetter(word) {
    var index = arrayOfWords.indexOf(word);
    if (arrayOfWords.indexOf(word) >= 0) {
      arrayOfWords.splice(index, 1);
      lives--;
      setCleanFallen(word);
    }
  }

  /*Set values back to starting values*/
  function tryAgain() {
    arrayOfWords = [];
    points = 0;
    lives = 10;
    firstTime = true;
    setState("try");
  }

  /*If first render or coming to change difficulty, renders the start menu,
otherwise renders game mechanics. If lives hit 0, renders game over menu.*/
  if (start === false) {
    if (lives > 0) {
      return (
        <div className="fallingWords">
          <div className="canvasWords">
            <h1 className="otsikkoWords">Tippuvat sanat</h1>
            <div className="containerBlockWords">
              <div className="letterClassWords" id="letterClassWords">
                <Timer
                  word={newWord}
                  arrayOfWords={arrayOfWords}
                  difficulty={difficultySetting}
                />
              </div>
              {capslockvaroitus()}
              <div className="uiDivWords">
                <p className="uiWords">Pisteet: {points}</p>
                <p className="uiWords">Elämät: {lives}</p>
                <form onSubmit={cleanUpLetter} autocomplete="off">
                  <input
                    className="wordInputWords"
                    id="wordInputWords"
                    onChange={handler}
                    autoFocus={true}
                    onBlur={({ target }) =>
                      setTimeout(function () {
                        target.focus({ preventScroll: true });
                      }, 2)
                    }
                  />
                  <button type="submit" className="hidebuttonWords"></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="fallingWords">
          <div className="canvasWords">
            <h1 className="otsikkoWords">Tippuvat sanat</h1>
            <div className="containerBlockWords">
              <div className="letterClass_lostWords">
                <h3 className="letters_lostWords">
                  Valitettavasti elämäsi loppuivat!
                </h3>
                <h2 className="pisteetWords">Pisteesi: {points}</h2>
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
            <Link to="/veda_ja_pudota" className="NextPrac" role="button">
              Seuraava tehtävä
            </Link>
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
            <h2 className="ohjetxtWords">Ohje:</h2>
            <p>
              Tehtävänäsi on kirjoittaa näppäimistölläsi samoja sanoja, jotka
              näet ruudulla. Kirjoita sana sille varatulle kentälle ja paina
              näpäimistöstäsi ENTER painiketta. Väärän sanan kirjoittaessasi
              menetät elämän, jos elämät menevät nollaan häviät. Menetät myös
              elämän jos sanat tippuvat alas asti.{" "}
              <strong>Onnea peliin!</strong>
            </p>
          </div>
          <div className="vaikeusTekstiWords">
            <b>Valitse vaikeusaste:</b>
            <br />
            <button
              className="startbtnWords"
              onClick={() => startGame("helppo")}
            >
              Helppo
            </button>
            <button
              className="startbtnWords"
              onClick={() => startGame("normaali")}
            >
              Normaali
            </button>
            <button
              className="startbtnWords"
              onClick={() => startGame("vaikea")}
            >
              Vaikea
            </button>
            <button
              className="startbtnWords"
              onClick={() => startGame("mahdoton")}
            >
              Mahdoton
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FallingWords;
