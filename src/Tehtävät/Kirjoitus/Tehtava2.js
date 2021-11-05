import React, { useState } from 'react'
import {Link } from "react-router-dom"
import "./Tehtava2.css"

const Tehtava2 = () => {
  const [ counter, setCounter ] = useState( 0 )
  const [ taskText, setTaskText ] = useState('')

  setTimeout(() => {
    laskurifunktio()
  }, 1000)

  const laskurifunktio = () => {
    setCounter( counter + 1 )
  }
  
  const textChangeEvent = ( event ) => {
    alert( `Hienoa, olet tehnyt tämän tehtävän onnistuneesti!\nVoit nyt jatkaa seuraavaan tehtävään.\n\nSulkeaksesi tämän ilmoituksen, paina OK-painiketta.` )
    console.log( "Tekstikenttä triggered" )
    setTaskText( event.target.value )
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
            <textarea onChange={textChangeEvent} value={taskText}></textarea>
            <p><br/></p>
          </div>
		  
		  </div>
          
        </div>
      </div>
      )
    }
    
    return (
        <div>
            <Sivukomponentti1/>

            <Link to="/kopiointi" className="NextPrac"
              role="button">Seuraava tehtävä</Link>
        </div>
    )
}
 export default Tehtava2
