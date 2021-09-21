import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <h1 className="title">
                Etusivu
            </h1>
            <div className="text-block">
                <p>Tervetuloa Digirasti-palveluun!</p>
				<br></br>
                <p>Täällä voit harjoitella tietojenkäsittelyyn tarvittavia taitoja. Sivun vasemmasta laidasta löydät listan eri tehtävistä. Nämä tekstit ovat linkkejä, joiden avulla voit navigoida sivustolla eri tehtäviin. Siirry tehtävään siirtämällä hiiren kursori tehtävän linkin päälle ja klikkaamalla sitä hiiren vasemmalla painikkeella.</p>
				<br></br>
                <p>Pääset milloin vain takaisin tälle sivulle painamalla "Etusivu"-linkkiä vasemmassa laidassa. Onnea harjoitteluun!</p>
			</div>
        </div>
    )
}

export default Home;