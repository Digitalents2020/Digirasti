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
          <p>Shift-näppäin on näppäimistön vasemmalla laidalla oleva näppäin, jossa on nuoli ylöspäin. Erikoismerkit ja isot kirjaimet saa painamalla Shiftiä ja kirjainta yhtä aikaa. Kun kirjoitat pitkää tekstiä tekstinkäsittelyohjelmalla, sinun ei tarvitse vaihtaa riviä painamalla Enteriä, vaan voit jatkaa kirjoittamista, vaikka rivin pääty lähestyy. Kun haluat vaihtaa kappaletta, voit painaa Enteriä, jolloin kappaleiden väliin tulee hieman tyhjää tilaa.</p>
          <p>Tekstinkäsittelyohjelma hoitaa rivinvaihdon puolestasi. Saat tehtyä huutomerkin painamalla Shift-näppäintä ja numeroa 1 samaan aikaan!</p>
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
