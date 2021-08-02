import React, { useState } from 'react'
import './Tietosuoja.css'


const Tietosuoja = () => {

  return (
    <>
      <div>
        Tietokone kannattaa lukita kun sen jättää käyttämättömäksi yleisessä tilassa tai työpaikalla.
      </div>
      <br /> 
      <button>Kyllä</button> 
      <button>Ei</button>
    </>
  )
}

export default Tietosuoja