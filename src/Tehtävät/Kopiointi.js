import React, { useState } from 'react'
import './Kopiointi.css'

const myArray = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc magna, pulvinar a neque nec, laoreet sodales dolor. Morbi lacinia luctus libero nec porta. Praesent a fringilla nisl. Fusce elementum molestie leo, vel tincidunt sem elementum vel. Morbi justo libero.",
  "Sed et lacus quis justo ullamcorper fringilla. Quisque at mauris ac nisi maximus eleifend. Mauris tincidunt auctor dictum. Vivamus ut maximus metus, et bibendum lacus. Aenean pretium magna ipsum, non maximus tellus blandit nec. Maecenas sit amet mauris eget mauris.",
  "Pellentesque fermentum imperdiet dui et hendrerit. Suspendisse ut enim a nibh bibendum mattis elementum at quam. Curabitur ac rutrum nibh. Pellentesque imperdiet, purus eu scelerisque volutpat, est velit rutrum turpis, vel dictum sem ligula vel ligula. Donec tellus nibh, pharetra. "
]

// selects a random text from the array

const selectRandom = 
  myArray[Math.floor(Math.random() * myArray.length)]

// used to set states from the input field. 

const Kopiointi = () => {
  const [ kopioitu, setKopioitu ] = useState('')
  const [ kopioituTeksti, setKopioituTeksti ] = useState([]);

  const handleChangeKopioitu = e => {
    setKopioitu(e.target.value);
  }

  const handleClick = e => {
    setKopioituTeksti([...kopioituTeksti, { kopioitu : kopioitu}])
  }

  // checks if the ''copied'' text in the input field matches with the randomly selected text

  const matchCheck = () => {
    if (kopioitu === selectRandom) {
      alert('Oikein')
    } else {
      alert('Väärin')
    }
  }

  return (
    <>
      <h2>Tekstin kopiointi</h2>
      <p>{selectRandom}</p>
      <br /> 
      <p>Kopioi yllä oleva teksti alla olevaan tekstikenttään.</p>
      <input type="text" placeholder="Liitä teksti tähän" name="kopioitu" onChange={handleChangeKopioitu} />
      <br />
      <button onClick={() => {
        handleClick();
        matchCheck();
      }}>
        Palautus
      </button>
    </>
  )
}

export default Kopiointi;