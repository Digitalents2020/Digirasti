import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../../App.css"

  const Tehtava1 = () => {
    const [ counter, setCounter ] = useState( 0 )
    const [ taskTimer, countTaskTimer ] = useState( '00:00' )
    const [ taskText, setTaskText ] = useState('Helsi8ngin työllisyys4palveluiden tavoittee5na on edistää1 nykyis9tä tehokkaam1min työ3ttömien työnhaki7joiden työllistym9istä ja koulutuks0een ohjaut4umista, sekä tuoda uu6sia ratkai2suja os1aavan työvoiman saatavu8uteen.\n\nSuomal3aisten digitaitojen tärkeys kor6ostuu palveluiden muuttue7ssa s2ähköisiksi. On arvioitu, että noin 7neljänneksellä väestöstä olisi liian heikot digitaido345t.\n\nHelsingin kaupungin työllisyys6palveluiden 7toteuttama Digirasti-hanke tarjoaa helsinkiläisille50 työttö9mille työnhakuun keskittyvää digitaito-opetusta.')

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
      if( event.target.value === '' ) {
        alert( `Ups, poistit kaiken tekstin. Näin ei pitänyt tehdä!` )
      }
      else {
        setTaskText( event.target.value )
      }
    }

    const aloitusAlustaFunktio = () => {
      if (window.confirm( `Oletko varma että haluat aloittaa alusta?` )) {
        setTaskText( "Helsi8ngin työllisyys4palveluiden tavoittee5na on edistää1 nykyis9tä tehokkaam1min työ3ttömien työnhaki7joiden työllistym9istä ja koulutuks0een ohjaut4umista, sekä tuoda uu6sia ratkai2suja os1aavan työvoiman saatavu8uteen.\n\nSuomal3aisten digitaitojen tärkeys kor6ostuu palveluiden muuttue7ssa s2ähköisiksi. On arvioitu, että noin 7neljänneksellä väestöstä olisi liian heikot digitaido345t.\n\nHelsingin kaupungin työllisyys6palveluiden 7toteuttama Digirasti-hanke tarjoaa helsinkiläisille50 työttö9mille työnhakuun keskittyvää digitaito-opetusta." )
	  }
    }

    const tarkistusFunktio = () => {
		aikatulosfunktio()
        if( taskText === "Helsingin työllisyyspalveluiden tavoitteena on edistää nykyistä tehokkaammin työttömien työnhakijoiden työllistymistä ja koulutukseen ohjautumista, sekä tuoda uusia ratkaisuja osaavan työvoiman saatavuuteen.\n\nSuomalaisten digitaitojen tärkeys korostuu palveluiden muuttuessa sähköisiksi. On arvioitu, että noin neljänneksellä väestöstä olisi liian heikot digitaidot.\n\nHelsingin kaupungin työllisyyspalveluiden toteuttama Digirasti-hanke tarjoaa helsinkiläisille työttömille työnhakuun keskittyvää digitaito-opetusta." ) {
          alert( `Hienoa! Olet onnistuneesti poistanut kaikki numerot!\n\nAikaa sinulla tähän tehtävään meni ${taskTimer}.` )
        }
        else {
          numeronTarkistusFunktio( taskText )
        }
    }

    const numeronTarkistusFunktio = ( param ) => {
        let numero = param.match(/\d+/g)
        if( numero === null) {
          alert( `Hienoa, poistit kaikki numerot. Ikävä kyllä poistit myös muutakin.\nYritä uudelleen ja poista vain numerot!\n\nAikaa sinulla tähän tehtävään on mennyt ${taskTimer}.` )
        }
        else {
          alert( `Numeroita on vielä jäljellä, jatka poistamista!\n\nAikaa sinulla tähän tehtävään on mennyt ${taskTimer}.`)
        }
    }

    return (
      <div>
        <div className="mainPageFrame">
			    <div className="innerPageFrame">
			      <h1 className="pageHeader">Muokkaustehtävä</h1>
			      <div className="pageContentFrame">
				      <h2 className="pageInfoTextHeader">Ohje:</h2>
				      <p>Liiku tekstissä nuolinäppäimillä ja poista tekstistä kaikki numerot.</p>
			      </div>
			    </div>
			    <div className="pageContentFrame">
			      <textarea className="textWritingArea" onChange={textChangeEvent} value={taskText} ></textarea>
			      <button className="actionButton" onClick={ tarkistusFunktio } value="validateResult">Tarkista tulos</button>
			      <button className="actionButton" onClick={ aloitusAlustaFunktio } value="reset">Aloita alusta</button>
			    </div>
		    </div>
        <Link to="/kopiointi" className="nextPracButton" role="button">Seuraava tehtävä</Link>
        </div>
    )
  }
  
  export default Tehtava1
