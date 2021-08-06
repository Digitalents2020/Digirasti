import React from 'react'
import './Email.css'

const Email = () => {

    return (
        <div className="form-box">
            <p>Tässä tehtävässä opetellaan sähköpostin kirjoittamista ja liittetiedoston liittämistä. Tehtävänäsi on kirjoittaa pienimuotoinen työhakemus vastaanottajalle esimerkki.makkonen@testi-pesti.fi ja muistathan myös liittää CV:si sähköpostin liitteeksi!</p>
            <p>Ei huolta, kirjoittamasi hakemus ei oikeasti lähde mihinkään</p>
                <h5>Sähköposti</h5>
                    <div className='field'>
                        <form>
                            <label>vastaanottaja</label>
                            <input type='text'></input>
                            <label>Aihe</label>
                            <input type='text'></input>
                            <label>Viesti</label>
                            <textarea></textarea>
                            <label>Lataa liite</label>
                            <input type='file'></input>
                            <input className='submit' type='submit' value='Lähetä'/>
                        </form> 
                    </div>
        </div>
    )
}

//validation tests
const validation = () => {
    // ()
}


export default Email
