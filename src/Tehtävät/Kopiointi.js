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

const Kopiointi = (props) => {
  const [ copied, setCopied ] = useState('')
  const [ copiedText, setCopiedText ] = useState([]);
  const [ addText, setAddText ] = useState('')

  const handleChangeCopied = e => {
    setCopied(e.target.value);
  }

  const handleClick = e => {
    setCopiedText([...copiedText, { copied : copied}])
  }



  // checks if the copied text in the input field matches with the randomly selected text

  const matchCheck = () => {
    if (copied === selectRandom) {
      setAddText([
      <div className="">
        <div className="">
          Teksti on kopioitu oikein!
        </div>
      </div>
      ])
    } else {
      setAddText([<div className="">Jokin meni pieleen, yritä uudestaan!</div>])
    }
  }
  



  return (
    <>
      <h2>Tekstin kopiointi</h2>
      <p>{selectRandom}</p>
      <br /> 
      <p>Kopioi yllä oleva teksti alla olevaan tekstikenttään. Voit kopioida tekstiä maalaamalla sen ja joko painamalla pikanäppäimiä <strong>"Ctrl + C"</strong> samaan aikaan, tai painamalla hiiren oikee näppäintä ja valitsemalla <strong>"Kopioi"</strong> valikosta.</p>
      <input type="text" placeholder="Liitä teksti tähän" name="copied" onChange={handleChangeCopied} />
      <br />
      <button onClick={() => {
        handleClick();
        matchCheck();
      }}>
        Palautus
      </button>
      <br />
      <>{addText}</>
    </>
  )
}

export default Kopiointi;