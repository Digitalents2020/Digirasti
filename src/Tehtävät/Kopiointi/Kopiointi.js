import React, { useState } from 'react'
import './Kopiointi.css'

const myArray = [
  "Helsingin työllisyyspalveluiden tavoitteena on edistää nykyistä tehokkaammin työttömien työnhakijoiden työllistymistä ja koulutukseen ohjautumista, sekä tuoda uusia ratkaisuja osaavan työvoiman saatavuuteen.",
  "Suomalaisten digitaitojen tärkeys korostuu palveluiden muuttuessa sähköisiksi. On arvioitu, että noin neljänneksellä väestöstä olisi liian heikot digitaidot.",
  "Helsingin kaupungin työllisyyspalveluiden toteuttama Digirasti-hanke tarjoaa helsinkiläisille työttömille työnhakuun keskittyvää digitaito-opetusta."
]

// selects a random text from the array

const selectRandom = 
  myArray[Math.floor(Math.random() * myArray.length)]

// used to set states from the input field. 

const Kopiointi = () => {
  const [ copied, setCopied ] = useState('')
  const [ copiedText, setCopiedText ] = useState([]);
  const [ addText, setAddText ] = useState('')

  const handleChangeCopied = e => {
    setCopied(e.target.value);
  }

  const handleClick = e => {
    setCopiedText([...copiedText, { copied : copied}])
  }

  // checks if the copied text in the input field matches with the randomly selected text, trims any whitespace left in the field.

  const matchCheck = () => {
    if (copied.trim() === selectRandom.trim()) {
      setAddText(
      <div>
        Teksti on kopioitu oikein!
      </div>
      )
    } else {
      setAddText(
      <div>
        Jokin meni pieleen, yritä uudestaan!
      </div>
      )
    }
  }
  
  return (
    <div>
      <h2>Tekstin kopiointi</h2>
      <p>Kopioi alla oleva teksti alla olevaan tekstikenttään. Voit kopioida tekstiä maalaamalla sen ja joko painamalla pikanäppäimiä <strong>"Ctrl + C"</strong> samaan aikaan, tai painamalla hiiren oikee näppäintä ja valitsemalla <strong>"Kopioi"</strong> valikosta. Voit myös maalata tekstin ja vetää sen tekstikenttään.</p>
      <p>Tekstin maalaamisen tunnistaa siitä kun se on värjätty siniseksi.</p>
      <br />
      <p>{selectRandom}</p>
      <input type="text" className="input" placeholder="Liitä teksti tähän" name="copied" onChange={handleChangeCopied} />
      <br />
      <button style={{ marginBottom: "10px" }} onClick={() => {
        handleClick();
        matchCheck();
      }}>
        Palautus
      </button>
      <br />
      <>{addText}</>
    </div>
  )
}

export default Kopiointi;