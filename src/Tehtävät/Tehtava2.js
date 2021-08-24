import React, { useState } from 'react'

const Button = ( props ) => {
  return (
    <button onClick={ props.handleClick }>
    { props.label }
    </button>
  )
}

const Tehtava2 = () => {
  const [demoMessage, setDemoMessage] = useState('')

    const textareastyle = {
        minHeight: '220px',
		    minWidth: '500px'
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
      
      const alertDemo = () => {
        alert( "Tällainen on oletus alert-ikkuna. Ruma mutta yleinen." )
      }
      const notificationDemo = () => {
        if( demoMessage === '' )
        setDemoMessage( "Tämä on erilainen ilmoitusikkuna." )
        else {
          setDemoMessage( '' )
        }
      }

      const Notification = ({ message }) => {
        if (message === '') {
          return null
        }
        return (
          <div className="demoNotification">
            {message}
          </div>
        )
      }

      const Sivukomponentti2 = () => { 
          return (
            <div>
              <textarea style={textareastyle}></textarea>
              <p><br/></p>
            </div>
          )
        }

        const Sivukomponentti3 = () => { 
            return (
              <div>
                <Button handleClick={alertDemo} label='Alert'/>
                <Button handleClick={notificationDemo} label='Ilmoitusikkuna'/>
                <p><br/></p>
                <Notification message={demoMessage}/>
                <p><br/></p>
                <p>Shift-näppäin on näppäimistön vasemmalla laidalla oleva näppäin, jossa on nuoli ylöspäin. Erikoismerkit ja isot kirjaimet saa painamalla Shiftiä ja kirjainta yhtä aikaa. Kun kirjoitat pitkää tekstiä tekstinkäsittelyohjelmalla, sinun ei tarvitse vaihtaa riviä painamalla Enteriä, vaan voit jatkaa kirjoittamista, vaikka rivin pääty lähestyy. Kun haluat vaihtaa kappaletta, voit painaa Enteriä, jolloin kappaleiden väliin tulee hieman tyhjää tilaa.</p>
                <p>Tekstinkäsittelyohjelma hoitaa rivinvaihdon puolestasi. Saat tehtyä huutomerkin painamalla Shift-näppäintä ja numeroa 1 samaan aikaan!</p>
                <p><br/></p>
              </div>
            )
          }

    return (
        <div>
            <h1>Tehtävä 2</h1>
            <Sivukomponentti1/>
            <Sivukomponentti3/>
            <Sivukomponentti2/>
        </div>
    )
}
 export default Tehtava2
