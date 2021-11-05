import React, { useState } from 'react'
import './Tietosuoja1.css'


const json = {
  kysymys_1: "Mitä tietoturvalla tarkoitetaan?",
  valinnat: [
    "Tietoturva tarkoittaa turvalliseksi luokiteltua tietoa.",
    "Tietoturva tarkoittaa yrityksen tai palveluntarjoajan tietojen suojaamista ulkopuolisilta."
  ],
  kysymys_2: "Mitä tietosuojalla tarkoitetaan?",
  valinnat_2: [
    "Tietosuoja tarkoittaa paikkaa, jossa tieto pysyy suojassa muilta.",
    "Tietosuoja tarkoittaa toimenpiteitä, joilla pyritään varmistamaan henkilötietojen asianmukainen käsittely ja yksityisyyden säilyminen."
  ],
  kysymys_3: "Minun täytyy itse huolehtia tietosuojastani.",
  valinnat_3: [
    "Kyllä.",
    "Ei."
  ],
  kysymys_4: "Pari eri salasanaa riittää kaikille eri käyttäjätileille (esim. sähköpostiin, sosiaalisen median kanaville, foorumeille, työnhaun sivustoille jne).",
  valinnat_4: [
    "Kyllä.",
    "Ei."
  ],
  kysymys_5: "Pankkivirkailija pyytää sinulta sähköpostilla käyttäjätunnusta ja salasanaa pankkipalveluun, jotta hän voi tehdä sinulle ylimääräisen talletuksen. Voitko antaa ne?",
  valinnat_5: [
    "Kyllä.",
    "Ei."
  ],
  vastaukset: []
}




const Tietosuoja = () => {
  const [kysymys, setKysymys] = useState(0)
  

  function EkaKysymys () {
    const [vastaus, setVastaus] = useState(0)
  /* kysymys is used to keep track on what question we're at, modifying it by 1 or -1 renders the next */
  /* the right answer is always marked with '1' in the state and extracted to display the right / wrong answer texts. */

  let button;
  if (Number.isInteger(vastaus)) {
    button = <button onClick={() => setKysymys(kysymys +1)}>Seuraava</button>
  } else {
    button = 
    <div>
      <br />
      <p>Valitse vastaus</p>
    </div>
  }
  return (
  <>
      <h3>Tietosuojakysely</h3>
      <h4>Olet aloittamassa tietosuojakyselyn</h4>
      <p>{json.kysymys_1}</p>
        <input type="radio" id="kysymys_1" name="kysymys" onChange={() => setVastaus(0) } /> {json.valinnat[0]}
        <br /> 
        <input type="radio" id="kysymys_2" name="kysymys" onChange={() => setVastaus(1) }/> {json.valinnat[1]}
        <br />
      {button}
  </>
  )
}

const TokaKysymys = () => {
  const [vastaus, setVastaus] = useState()
  return (
    <>
      <h3>Tietosuojakysely</h3>
      <p>{json.kysymys_2}</p>
      <input type="radio" id="kysymys_1" name="kysymys" onClick={() => setVastaus(0)}/> {json.valinnat_2[0]}
      <br />
      <input type="radio" id="kysymys_2" name="kysymys" onClick={() => setVastaus(1)}/> {json.valinnat_2[1]}
      <br />
      <button onClick={() => setKysymys(kysymys -1)}>Edellinen</button>
      <button onClick={() => setKysymys(kysymys +1)}>Seuraava</button>
    </>
  )
}

const KolmasKysymys = () => {
  const [vastaus, setVastaus] = useState()
  return (
    <>
      <h3>Tietosuojakysely</h3>
      <p>{json.kysymys_3}</p>
      <input type="radio" id="kysymys_3" name="kysymys" onClick={() => setVastaus(0)}/> {json.valinnat_3[0]}
      <br />
      <input type="radio" id="kysymys_3" name="kysymys" onClick={() => setVastaus(1)}/> {json.valinnat_3[1]}
      <br />
      <button onClick={() => setKysymys(kysymys -1)}>Edellinen</button>
      <button onClick={() => setKysymys(kysymys +1)}>Seuraava</button>
    </>
  )
}

  return (
    <div className="main">
      {kysymys === 0 && (
      <>
        <EkaKysymys />
      </>
      )}

      {kysymys === 1 && (
      <>
        <TokaKysymys />

      </>
      )}

      {kysymys === 2 && (
      <>
        <KolmasKysymys />

      </>
      )}
    </div>
  )
}
export default Tietosuoja