import React from 'react';
import './Home.css';
import { Link, Component } from "react-router-dom"
import ReactPlayer from 'react-player'
import Video1 from "./Resources/ctrlv_ctrlc.mp4"
import Video2 from "./Resources/email_anim.mp4"
import Video3 from "./Resources/mouse_copy.mp4"

const Home = () => {
    return (
		<div className="mainPageFrame">
		  <div className="innerPageFrame">
			  <h1 className="pageHeaderFrame">Etusivu</h1>
			  <div className="pageInfoFrame">
			    <h2 className="pageInfoTextHeader"><p>Tervetuloa Digirastin tehtäväsivuille!</p></h2>
			    <br></br>
				<p>Sivun vasemmasta laidasta löydät tehtäviä. Vie hiiren osoitin tehtävän nimen päälle ja klikkaa hiiren vasemmalla painikkeella. Näin siirryt sivustolla eri tehtäviin. Jokaisen tehtävän jälkeen voit painaa alhaalta löytyvää <b>Seuraava tehtävä</b>-painiketta.</p>
				<br></br>
				<p>Pääset milloin vain takaisin tälle sivulle painamalla <b>Etusivu</b>-linkkiä sivun vasemmassa laidassa.</p>
				<br></br>
				<p>Luethan tehtävän ohjeet huolellisesti ennen tehtävän aloittamista.</p>
				<br></br>
				<p>Onnea harjoitteluun!</p>
			  </div>
			  <Link to="/Tehtava2" className="NextPrac"
              role="button">Aloita</Link>
		  </div>
		  <div>
		    <br/>
			<p/>
		    <video controls src={Video1} type="video/mp4" width='25%' height='25%'/>
			<br/>
			<p/>
		    <video controls src={Video2} type="video/mp4" width='25%' height='25%'/>
			<br/>
			<p/>
		    <video controls src={Video3} type="video/mp4" width='25%' height='25%'/>
			</div>
		</div>
		
    )
}

export default Home;