import React, { useState } from 'react'

const Button = ( props ) => {
    return (
      <button onClick={ props.handleClick }>
      { props.label }
      </button>
    )
  }

const Tehtava1 = () => {
    const [ counter, setCounter ] = useState('')
    const [ taskText, setTaskText ] = useState('')
	
	  // 'Helsingin työllisyyspalveluiden tavoitteena on edistää nykyistä tehokkaammin työttömien työnhakijoiden työllistymistä ja koulutukseen ohjautumista, sekä tuoda uusia ratkaisuja osaavan työvoiman saatavuuteen.\n\nSuomalaisten digitaitojen tärkeys korostuu palveluiden muuttuessa sähköisiksi. On arvioitu, että noin neljänneksellä väestöstä olisi liian heikot digitaidot.\n\nHelsingin kaupungin työllisyyspalveluiden toteuttama Digirasti-hanke tarjoaa helsinkiläisille työttömille työnhakuun keskittyvää digitaito-opetusta.'
	  const tehtavaTekstiCorrupted = 'H3el8singin työll4is3yyspalveluiden tavo8itteena on edist4ää nyk4yistä tehokka4ammin työt4tömien työnha34kijoiden työlli7sty3mistä ja koulutukseen ohjautumista, sekä tuoda uusia ratka7isuja osaa44van työ123voiman s6aatavuuteen.\n\nSuom7alaisten digitai4tojen tärkeys kor3ostuu p87alveluiden muuttu7essa sähköisiksi. On arvio44itu, että 3noin4 neljänn7eksellä väestöstä o6lisi lii9an heikot digitaidot.4\n\nHels8ingin kaupungin työllisyys45palve6luiden toteuttama Digirasti-567hanke tarjoaa helsink3iläisille työttö8mille työ4nha4kuun kesk3ittyvää digi5taito-ope9tusta.'
	
    const textareastyle = {
        minHeight: '220px',
		    minWidth: '500px'
    }

    const Laskuri = ( ) => {
        setCounter( counter )
        console.log( "Tik..." )
        return( 
            <p>{counter}</p>
        )
    }

    const nappifunktio = ( props ) => {
		  setTaskText( tehtavaTekstiCorrupted )
    }
    
    const happening = () => {
      console.log( "Tekstikenttä triggered" )
    }

    const Sivukomponentti1 = () => { 
        return (
          <div>
            <p><br/></p>
            <p><b>Ohje:</b> Liiku tekstissä nuolinäppäimillä ja poista tekstistä kaikki numerot.</p>
            <p><br/></p>
          </div>
        )
      }

      const Sivukomponentti2 = () => { 
          return (
            <div>
              <textarea style={textareastyle} onChange={happening} value={taskText}></textarea>
              <p><br/></p>
            </div>
          )
        }

        const Sivukomponentti3 = () => { 
            return (
              <div>
                <Button handleClick={nappifunktio} label='ALOITA'/>
                <p><br/></p>
              </div>
            )
          }

          const Aikalaskuri = () => { 
              return (
                <div>
                  <p>Aikalaskuri: </p>
                  <Laskuri value='{counter}'/>
                  <br/>
                </div>
              )
            }

    return (
        <div>
            <h1>Tehtävä 1</h1>
            <Sivukomponentti1/>
            <Sivukomponentti3/>
            <Sivukomponentti2/>
            <Aikalaskuri/>
        </div>
    )
}
 export default Tehtava1
