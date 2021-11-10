import React, { useState }from 'react'
import { Link } from "react-router-dom"
import "./Tehtava2.css"

const Tehtava2 = () => {
  const [ counter, setCounter ] = useState( 0 )
  const [ taskTimer, countTaskTimer ] = useState( '00:00' )
  const [ taskText, setTaskText ] = useState('')

  const textareastyle = {
      minHeight: '100px',
      minWidth: '100%'
  }

  setTimeout(() => {
    laskurifunktio()
  }, 1000)

  const laskurifunktio = () => {
    setCounter( counter + 1 )
  }
  
  const aikatulosfunktio = () => {
	let minutes = Math.floor( counter / 60 );
	let seconds = counter - minutes * 60;
	if( seconds < 10 ) seconds = "0" + seconds
	
	let resultTime = minutes + ":" + seconds	
	countTaskTimer( resultTime )
  }

  const textChangeEvent = ( event ) => {
    setTaskText( event.target.value )
	aikatulosfunktio()
	
	let correctValue = 'Tässä tehtävässä harjoittelen kirjoittamaan tietokoneen näppäimistöllä. Opin käyttämään isoja ja pieniä kirjaimia sekä erikoismerkkejä! Kun olen oppinut kirjoittamaan tietokoneella sujuvasti, voin kirjoittaa työhakemuksen minua kiinnostavaan työpaikkaan. Mistä saisin apua ansioluettelon tekemiseen?'
	if( event.target.value === correctValue ) {
		alert( `Hienoa, olet tehnyt tämän tehtävän onnistuneesti!\nAikaa sinulla tähän tehtävään meni ${taskTimer}.\n\nVoit nyt jatkaa seuraavaan tehtävään.\nSulkeaksesi tämän ilmoituksen, paina OK-painiketta.` )
	}
  }
  
  const Sivukomponentti1 = () => { 
    return (
      <div className="mainPageFrame">
        <div className="innerPageFrame">
          <h1 className="pageHeaderFrame">Kirjoitustehtävä</h1>
          <div className="pageInfoFrame">
            <h2 className="pageInfoTextHeader">Ohje:</h2>
            <p>Kirjoita seuraava teksti alla olevaan kenttään. Teksti antaa sinulle vihjeitä, miten voit toimia, kun kirjoitat tekstiä.</p>
          </div>
          <div className="pageInfoFrame">
            <p>Tässä tehtävässä harjoittelen kirjoittamaan tietokoneen näppäimistöllä. Opin käyttämään isoja ja pieniä kirjaimia sekä erikoismerkkejä! Kun olen oppinut kirjoittamaan tietokoneella sujuvasti, voin kirjoittaa työhakemuksen minua kiinnostavaan työpaikkaan. Mistä saisin apua ansioluettelon tekemiseen?</p>
		    <div className="textAreaContainer">
              <textarea style={textareastyle} onChange={textChangeEvent} value={taskText} placeholder='Klikkaa tähän aloittaaksesi kirjoittamisen' />
            </div>		  
		  </div>
        </div>
      </div>
      )
    }

    return (
        <div>
            <Sivukomponentti1/>
            <Link to="/Tehtava1" className="NextPrac"
              role="button">Seuraava tehtävä</Link>
        </div>
    )
  }
  export default Tehtava2
