import React, { useState } from 'react'
import {Link } from "react-router-dom"
import "./Tehtava1.css"

const Button = ( props ) => {
  return (
    <button onClick={ props.handleClick }>
    { props.label }
    </button>
  )
}

const Tehtava1 = () => {
    const [ counter, setCounter ] = useState( 0 )
    const [ taskText, setTaskText ] = useState('Helsi8ngin työllisyys4palveluiden tavoittee5na on edistää1 nykyis9tä tehokkaam1min työ3ttömien työnhaki7joiden työllistym9istä ja koulutuks0een ohjaut4umista, sekä tuoda uu6sia ratkai2suja os1aavan työvoiman saatavu8uteen.\n\nSuomal3aisten digitaitojen tärkeys kor6ostuu palveluiden muuttue7ssa s2ähköisiksi. On arvioitu, että noin 7neljänneksellä väestöstä olisi liian heikot digitaido345t.\n\nHelsingin kaupungin työllisyys6palveluiden 7toteuttama Digirasti-hanke tarjoaa helsinkiläisille50 työttö9mille työnhakuun keskittyvää digitaito-opetusta.')
	    
	// 'Helsingin työllisyyspalveluiden tavoitteena on edistää nykyistä tehokkaammin työttömien työnhakijoiden työllistymistä ja koulutukseen ohjautumista, sekä tuoda uusia ratkaisuja osaavan työvoiman saatavuuteen.\n\nSuomalaisten digitaitojen tärkeys korostuu palveluiden muuttuessa sähköisiksi. On arvioitu, että noin neljänneksellä väestöstä olisi liian heikot digitaidot.\n\nHelsingin kaupungin työllisyyspalveluiden toteuttama Digirasti-hanke tarjoaa helsinkiläisille työttömille työnhakuun keskittyvää digitaito-opetusta.'
	// const tehtavaTekstiCorrupted = 'Helsi8ngin työllisyys4palveluiden tavoittee5na on edistää1 nykyis9tä tehokkaam1min työ3ttömien työnhaki7joiden työllistym9istä ja koulutuks0een ohjaut4umista, sekä tuoda uu6sia ratkai2suja os1aavan työvoiman saatavu8uteen.\n\nSuomal3aisten digitaitojen tärkeys kor6ostuu palveluiden muuttue7ssa s2ähköisiksi. On arvioitu, että noin 7neljänneksellä väestöstä olisi liian heikot digitaido345t.\n\nHelsingin kaupungin työllisyys6palveluiden 7toteuttama Digirasti-hanke tarjoaa helsinkiläisille50 työttö9mille työnhakuun keskittyvää digitaito-opetusta.'
  // const tehtavaTeksti = 'Helsingin työllisyyspalveluiden tavoitteena on edistää nykyistä tehokkaammin työttömien työnhakijoiden työllistymistä ja koulutukseen ohjautumista, sekä tuoda uusia ratkaisuja osaavan työvoiman saatavuuteen.\n\nSuomalaisten digitaitojen tärkeys korostuu palveluiden muuttuessa sähköisiksi. On arvioitu, että noin neljänneksellä väestöstä olisi liian heikot digitaidot.\n\nHelsingin kaupungin työllisyyspalveluiden toteuttama Digirasti-hanke tarjoaa helsinkiläisille työttömille työnhakuun keskittyvää digitaito-opetusta.'

// AIKALASKURI
/*
    setTimeout(() => {
      laskurifunktio()
    }, 1000)

    const laskurifunktio = () => {
      setCounter( counter + 1 )
    }
*/
    
    const textChangeEvent = ( event ) => {
      if( event.target.value === '' ) {
        alert( "Ups, poistit kaiken tekstin. Näin ei pitänyt tehdä!" )
      }
      else {
        setTaskText( event.target.value )
      }
      // alert( `Hienoa, olet tehnyt tämän tehtävän onnistuneesti!\nVoit nyt jatkaa seuraavaan tehtävään.\n\nSulkeaksesi tämän ilmoituksen, paina OK-painiketta.` )
      console.log( "Tekstikenttä triggered" )
    }

    const testinappi1 = () => {
      setTaskText( "Helsingin työllisyyspalveluiden tavoitteena on edistää nykyistä tehokkaammin työttömien työnhakijoiden työllistymistä ja koulutukseen ohjautumista, sekä tuoda uusia ratkaisuja osaavan työvoiman saatavuuteen.\n\nSuomalaisten digitaitojen tärkeys korostuu palveluiden muuttuessa sähköisiksi. On arvioitu, että noin neljänneksellä väestöstä olisi liian heikot digitaidot.\n\nHelsingin kaupungin työllisyyspalveluiden toteuttama Digirasti-hanke tarjoaa helsinkiläisille työttömille työnhakuun keskittyvää digitaito-opetusta." )
    }

    const testinappi2 = () => {
      setTaskText( "Hels työllisveluiden taaammin työttömien  ja koulutukseen , sekä tuoda uusia  osaavan työvoiman saatavuuteen.\n\nSuomalaisten digitaitojen tärkeys korostuu palveluiden muuttuessa sähköisiksi. On arvioitu, että noin neljänneksellä väestöstä olisi Digirasti.\n\nHelsingin kaupungin työllisyyspalveluiden toteuttama nhakuun keskittyetusta." )
    }

    const testinappi3 = () => {
      setTaskText( "" )
      alert( "Ups, poistit kaiken tekstin. Näin ei pitänyt tehdä!" )
    }

    const testinappi4 = () => {
      setTaskText( 'Helsingin111 työllisyyspalveluiden tavoitteena on edistää nykyistä tehokkaammin työttömien työnhakijoiden työllistymistä ja koulutukseen ohjautumista, sekä tuoda uusia ratkaisuja osaavan työvoiman saatavuuteen.\n\nSuomalaisten digitaitojen tärkeys korostuu palveluiden muuttuessa sähköisiksi. On arvioitu, että noin neljänneksellä väestöstä olisi liian heikot digitaidot.\n\nHelsingin kaupungin työllisyyspalveluiden toteuttama Digirasti-hanke tarjoaa helsinkiläisille työttömille työnhakuun keskittyvää digitaito-opetusta.' )
    }
    const aloitusAlustaFunktio = () => {
      if (window.confirm( `Oletko varma että haluat aloittaa alusta?` )) {
        setTaskText( "Helsi8ngin työllisyys4palveluiden tavoittee5na on edistää1 nykyis9tä tehokkaam1min työ3ttömien työnhaki7joiden työllistym9istä ja koulutuks0een ohjaut4umista, sekä tuoda uu6sia ratkai2suja os1aavan työvoiman saatavu8uteen.\n\nSuomal3aisten digitaitojen tärkeys kor6ostuu palveluiden muuttue7ssa s2ähköisiksi. On arvioitu, että noin 7neljänneksellä väestöstä olisi liian heikot digitaido345t.\n\nHelsingin kaupungin työllisyys6palveluiden 7toteuttama Digirasti-hanke tarjoaa helsinkiläisille50 työttö9mille työnhakuun keskittyvää digitaito-opetusta." )
      }
    }

    const tarkistusFunktio = () => {
      if( taskText === "Helsingin työllisyyspalveluiden tavoitteena on edistää nykyistä tehokkaammin työttömien työnhakijoiden työllistymistä ja koulutukseen ohjautumista, sekä tuoda uusia ratkaisuja osaavan työvoiman saatavuuteen.\n\nSuomalaisten digitaitojen tärkeys korostuu palveluiden muuttuessa sähköisiksi. On arvioitu, että noin neljänneksellä väestöstä olisi liian heikot digitaidot.\n\nHelsingin kaupungin työllisyyspalveluiden toteuttama Digirasti-hanke tarjoaa helsinkiläisille työttömille työnhakuun keskittyvää digitaito-opetusta." ) {
        alert( "Hienoa! Olet onnistuneesti poistanut kaikki numerot!" )
      }
      else {
        numeronTarkistusFunktio( taskText )
      }
    }

    const numeronTarkistusFunktio = ( param ) => {
      console.log( "varsinainen numerotarkistusfunktio" )
      let numero = param.match(/\d+/g)
      console.log( numero )
      if( numero === null) {
        alert( "Hienoa, poistit kaikki numerot. Ikävä kyllä poistit myös muutakin.\n\n Yritä uudelleen ja poista vain numerot!" )
      }
      else {
        alert( "Numeroita on vielä jäljellä.")
      }
    }

    const textareastyle = {
      minHeight: '200px',
      minWidth: '95%'
    }

    const Sivukomponentti1 = () => { 
      return (
        <div className="mainPageFrame">
        <div className="innerPageFrame">
          <h1 className="pageHeaderFrame">Editointitehtävä</h1>
          <div className="pageInfoFrame">
            <h2 className="pageInfoTextHeader">Ohje:</h2>
            <p>Liiku tekstissä nuolinäppäimillä ja poista tekstistä kaikki numerot.</p>
          </div>
        </div>
        
        <div>
          <Button handleClick={ testinappi1 } label="Testinappi: oikein" value="correct"/>
          <Button handleClick={ testinappi2 } label="Testinappi: sinne päin" value="about"/>
          <Button handleClick={ testinappi3 } label="Testinappi: tyhjennys" value="empty"/>
          <Button handleClick={ testinappi4 } label="Testinappi: numeroita jäljellä" value="almost"/>
          <p/>
          <textarea style={textareastyle} onChange={textChangeEvent} value={taskText}></textarea>
          <p><br/></p>
          <Button className="actionButton" handleClick={ tarkistusFunktio } label="Tarkista tulos" value="validateResult"/>
          <Button className="actionButton" handleClick={ aloitusAlustaFunktio } label="Aloita alusta" value="reset"/>
          </div>
      </div>
      )
    }

    return (
        <div>
            <Sivukomponentti1/>

            <Link to="/Tehtava2" className="NextPrac"
              role="button">Seuraava tehtävä</Link>
        </div>
    )
}
 export default Tehtava1
