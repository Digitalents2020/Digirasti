import React from 'react';

// Aaaaa

const Tehtava2 = ( props ) => {

    const happening = () => {
        console.log( "text activated" )
    }
    const textareaHappening = () => {
        console.log( "textarea activated" )
    }
    const textareastyle = {
        maxHeight: '200px',
        minHeight: '100px',
    //    resize: 'none',
    //    padding: '9px',
    //    boxSizing: 'border-box',
    //    fontSize: '15px'}
    }

    const SivukomponenttiOhjeet = () => { 
        return (
            <div>
			  <p><br/></p>
              <h3>Näppäimistöharjoituksia:</h3>
              <p>Kirjoita näppäimistöllä esimerkkitekstit</p>
              <p><br/></p>
            </div>
        )
      }
    const Sivukomponentti1 = () => {
        return (
            <div>
			  <p>Tekstiä mitä voi kirjoittaa</p>
              <input type="textarea" onChange={happening}></input>
              <p><br/></p>
            </div>
        )
      }

      const Sivukomponentti2 = () => { 
          return (
            <div>
			  <p>Tekstiä mitä voi kirjoittaa</p>
              <textarea onChange={textareaHappening} ></textarea>
              <p><br/></p>
            </div>
          )
        }

        const Sivukomponentti3 = () => { 
            return (
                <div>
				  <p>Tekstiä kirjoitettavaksi</p>
                  <input type="textarea" onChange={happening}></input>
                  <p><br/></p>
				  <p>Vielä lisää tekstiä</p>
                  <textarea style={textareastyle} onChange={textareaHappening} ></textarea>
                </div>
              )
          }

    return (
        <div>
            <h1>Tehtävä 2</h1>
            <SivukomponenttiOhjeet/>
            <Sivukomponentti1/>
            <Sivukomponentti2/>
            <Sivukomponentti1/>
            <Sivukomponentti3/>
        </div>
    )
}
 export default Tehtava2
