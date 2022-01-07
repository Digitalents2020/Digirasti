import React, { useState } from "react"
import {Link } from "react-router-dom"
import "../../App.css"
import Video1 from "../../Resources/mouse_copy.mp4"
import Video2 from "../../Resources/ctrlv_ctrlc.mp4"

const myArray = [
  "Helsingin työllisyyspalveluiden tavoitteena on edistää nykyistä tehokkaammin työttömien työnhakijoiden työllistymistä ja koulutukseen ohjautumista, sekä tuoda uusia ratkaisuja osaavan työvoiman saatavuuteen.",
  "Suomalaisten digitaitojen tärkeys korostuu palveluiden muuttuessa sähköisiksi. On arvioitu, että noin neljänneksellä väestöstä olisi liian heikot digitaidot.",
  "Helsingin kaupungin työllisyyspalveluiden toteuttama Digirasti-hanke tarjoaa helsinkiläisille työttömille työnhakuun keskittyvää digitaito-opetusta.",
  "Digitaitokartoituksen kyselyn perusteella suomalaisten digitaidot ja osaaminen älylaitteiden sekä digitaalisten palvelujen käytön osalta on hyvällä tasolla. Avovastauksissa korostui erityisesti huoli ikääntyvän väestön digitaidoista ja nopeassa muutoksessa mukana pysymisestä. Lisäksi digikyselyn avovastauksissa mainittiin myös nuorten digitaidot erityisesti julkisten palvelujen käytön osalta. Syinä digilaitteiden käyttämättömyyteen mainittiin mm., ettei vastaaja omista laitteita tai osaa käyttää niitä, ja ettei laitteiden ostamiseen ole varaa. Lisäksi vastauksissa nousivat esiin terveydelliset syyt. Useassa vastauksessa em. syyt myös linkittyivät toisiinsa, eli yhtä selkeää syytä ei ollut. Vastaajien näkemysten mukaisesti digitukea kaipaavat erityisesti iäkkäät, mutta myös muut väestöryhmät ja erilaisissa elämäntilanteissa olevat kuten työttömät, maahanmuuttajat, nuoret ja työssäkäyvätkin"
]
// used to set states from the input field. 
const Kopiointi = () => {
  const [ copied, setCopied ] = useState('')
  const [ secondCopied, setSecondCopied ] = useState('')
  const [ addText, setText ] = useState('')
  const [ secondText, setSecondText] = useState('')


  const Right = (props) => {
    return (
      <div>
        Teksti on kopioitu oikein! {props.text}
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
        <h1 className="pageHeader">Kopiointitehtävä</h1>
        <div className="pageContentFrame">
          <h2 className="infoHeader">Ohje:</h2>
			    <p>Kopioi ja liitä teksti sen alla olevaan tyhjään kenttään.<br/><br/>
              <strong>Kopiointi:</strong> Valitse teksti maalaamalla eli kuljettamalla hiirtä sen yli vasen painike alas painettuna. Kun koko kopioitavan tekstin tausta on sininen, paina hiiren oikeaa näppäintä maalatun tekstin päällä. Valitse lisävalikosta "Kopioi". teksti maalaamalla se ja painamalla hiiren oikeaa näppäintä maalatun tekstin päällä ja valitsemalla lisävalikosta “Kopioi”.
              Siirrä kursori (hiiren osoitin) tyhjän laatikon päälle ja paina hiiren oikealla painikkeella ja valitse lisävalikosta "Liitä".</p>
              <video controls src={Video1} type="video/mp4" width="50%" />
		    </div>
      </div>
	    <div className="pageContentFrame">
        <p>{myArray[0]}</p>
        <textarea className="textWritingArea textWriteKopiointi" placeholder="Liitä teksti tähän" name="copied" onChange={e => setCopied(e.target.value)} />
        <br />
        <button className="actionButton" onClick={() => {
          if (copied.trim() === myArray[0]) {
            setText(
              <Right text="Tee seuraavaksi alapuolelta löytyvä tehtävä."/>
            )
          } else {
            setText(
              <Wrong />
            )
          }
        }}>
        Valmis
        </button>
        {addText}
      </div>
      <div className="pageContentFrame">
          <h2 className="infoHeader">Ohje:</h2>
          <p>Kopioi ja liitä teksti sen alla olevaan tyhjään kenttään.<br/>
          Kopioi teksti maalaamalla se ja painamalla näppäimiä Ctrl + C samanaikaisesti. 
          Siirrä kursori (hiiren osoitin) tyhjän laatikon päälle ja Liitä teksti laatikkoon klikkaamalla hiirellä ja paina sitten näppäimiä Ctrl + V</p>
          <video controls src={Video2} type="video/mp4" width="50%"/>
        <br />
		    </div>
      <div className="pageContentFrame">
        <p>{myArray[3]}</p>
        <textarea type="text" className="textWritingArea textWriteKopiointi"  style={{minHeight:300+"px"}}  placeholder="Liitä teksti tähän" name="secondCopied" onChange={e => setSecondCopied(e.target.value)} />
        <br />
        <button className="actionButton" onClick={() => {
          if (secondCopied.toString() === myArray[3]) {
            setSecondText(
              <Right text="Voit siirtyä seuraavaan tehtävään alla olevasta napista!" />
            )
          } else {
            setSecondText(
              <Wrong />
            )
          }
        }}>
        Valmis
        </button>
        {secondText}
		  </div>
      <Link to="/tietoturva" className="nextPracButton" role="button">Seuraava tehtävä</Link>
    </div>
	</div>
  )
}
export default Kopiointi;