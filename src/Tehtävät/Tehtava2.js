import React, { useState } from 'react'

const Tehtava2 = () => {
  const [ counter, setCounter ] = useState( 0 )
  const [ taskText, setTaskText ] = useState('')

  const textareastyle = {
      minHeight: '100px',
      minWidth: '95%'
  }

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
      <div>
        <p><br/></p>
        <p><b>Ohje:</b>Kirjoita seuraava teksti alla olevaan kenttään. Teksti antaa sinulle vihjeitä, miten voit toimia, kun kirjoitat tekstiä.</p>
        <p><br/></p>
      </div>
      )
    }
    
    const Sivukomponentti2 = () => { 
      return (
        <div>
          <p><br/></p>
          <p>Tässä tehtävässä harjoittelen kirjoittamaan tietokoneen näppäimistöllä. Opin käyttämään isoja ja pieniä kirjaimia sekä erikoismerkkejä! Kun olen oppinut kirjoittamaan tietokoneella sujuvasti, voin kirjoittaa työhakemuksen minua kiinnostavaan työpaikkaan. Mistä saisin apua ansioluettelon tekemiseen?</p>
          <p><br/></p>
        </div>
      )
    }

    const Sivukomponentti3 = () => { 
      return (
        <div>
          <textarea style={textareastyle} onChange={textChangeEvent} value={taskText}></textarea>
          <p><br/></p>
        </div>
      )
    }

    return (
        <div>
            <h1>Tehtävä 2</h1>
            <Sivukomponentti1/>
            <Sivukomponentti2/>
            <Sivukomponentti3/>
        </div>
    )
}
 export default Tehtava2
