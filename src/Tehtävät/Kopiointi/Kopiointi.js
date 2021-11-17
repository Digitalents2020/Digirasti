import React, { useState } from 'react'
import {Link } from "react-router-dom"
import './Kopiointi.css'
const myArray = [
  "Helsingin työllisyyspalveluiden tavoitteena on edistää nykyistä tehokkaammin työttömien työnhakijoiden työllistymistä ja koulutukseen ohjautumista, sekä tuoda uusia ratkaisuja osaavan työvoiman saatavuuteen.",
  "Suomalaisten digitaitojen tärkeys korostuu palveluiden muuttuessa sähköisiksi. On arvioitu, että noin neljänneksellä väestöstä olisi liian heikot digitaidot.",
  "Helsingin kaupungin työllisyyspalveluiden toteuttama Digirasti-hanke tarjoaa helsinkiläisille työttömille työnhakuun keskittyvää digitaito-opetusta."
]
// used to set states from the input field. 
const Kopiointi = () => {
  const [ copied, setCopied ] = useState('')
  const [ secondCopied, setSecondCopied ] = useState('')
  const [ addText, setText ] = useState('')
  const [ secondText, setSecondText] = useState('')


  const Right = () => {
    return (
      <div>
        Teksti on kopioitu oikein!
      </div>
    )
  }
  const Wrong = () => {
    return (
      <div>
        Jokin meni pieleen, yritä uudestaan.
      </div>
    )
  }
  return (
  
	<div>
	  <div className="mainPageFrame">
        <div className="innerPageFrame">
          <h1 className="pageHeaderFrame">Tekstin kopiointi</h1>
          <div className="pageInfoFrame">
            <h2 className="pageInfoTextHeader">Ohje:</h2>
			  <p>Kopioi alla oleva teksti alla olevaan tekstikenttään. Voit kopioida tekstiä maalaamalla sen ja joko painamalla pikanäppäimiä <strong>"Ctrl + C"</strong> samaan aikaan, tai painamalla hiiren oikee näppäintä ja valitsemalla <strong>"Kopioi"</strong> valikosta. Voit myös maalata tekstin ja vetää sen tekstikenttään. Tekstin maalaamisen tunnistaa siitä kun se on värjätty siniseksi.</p>
		  </div>
        </div>
	  <div>

      <br />
      <p>{myArray[0]}</p>
      <input type="text" className="input" placeholder="Liitä teksti tähän" name="copied" onChange={e => setCopied(e.target.value)} />
      <br />
      <button style={{ marginBottom: "10px" }} onClick={() => {
        if (copied.trim() === myArray[0]) {
          setText(
            <Right />
          )
        } else {
          setText(
            <Wrong />
          )
        }
      }}>
        Palautus
      </button>
      <br />
      <>{addText}</>
      <p>Toinen kopioitava teksti, kopioi alla oleva teksti tekstikenttään.</p>
      <br />
      <p>{myArray[1]}</p>
      <input type="text" className="input" placeholder="Liitä teksti tähän" name="secondCopied" onChange={e => setSecondCopied(e.target.value)} />
      <br />
      <button style={{ marginBottom: "10px" }} onClick={() => {
        if (secondCopied.toString() === myArray[1]) {
          setSecondText(
            <Right />
          )
        } else {
          setSecondText(
            <Wrong />
          )
        }
      }}>Palautus</button>
      <>{secondText}</>
		</div>
      </div>
	  <Link to="/tietoturva" className="NextPrac"
              role="button">Seuraava tehtävä</Link>
	</div>
  )
}
export default Kopiointi;