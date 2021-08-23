import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Esimerkkitehtava1 from "./Esimerkkitehtava1";
import Tehtava1 from "./Tehtävät/Tehtava1";
import Tehtava2 from "./Tehtävät/Tehtava2";
import Home from "./Home";
import Kopiointi from "./Tehtävät/Kopiointi/Kopiointi";
import Tietosuoja from "./Tehtävät/Tietosuoja/Tietosuoja";
import FallingGame from "./Tehtävät/Tippuvat kirjaimet/FallingGame";
import FallingWords from "./Tehtävät/Tippuvat sanat/FallingWords";
import Email from "./Tehtävät/Email/Email";
import Eform from "./Tehtävät/Eform/Eform";

//The Exercises can be added as their own files as demonstrated with the Esimerkkitehtava1
//This is very barebones, but does the job for now
//To create a new link to the nav bar, simply mimic the ones already there and use the name of your exercise file. Also be aware that the empty home path ("/") should be at the bottom. A switch looks through its children <Route>s and renders the first matching one, and as everyone of them starts with an "/" it will always just render the home path if it is placed above other routes.
//Have questions? Ask away!

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <h1>Digirastin tehtäväsivut</h1>
          <ul>
            <li>
              <Link to="/">Etusivu</Link>
            </li>
            <li>
              <Link to="/esimerkkitehtava1">Esimerkkitehtävä1</Link>
            </li>
            <li>
              <Link to="/Tehtava1">Tehtävä 1</Link>
            </li>
            <li>
              <Link to="/Tehtava2">Tehtävä 2</Link>
            </li>
            <li>
              <Link to="/kopiointi">Kopiointitehtävä</Link>
            </li>
            <li>
              <Link to="/tietosuoja">Tietosuojatehtävä</Link>
            </li>
            <li>
              <Link to="/tippuvat_kirjaimet">Tippuvat kirjaimet</Link>
            </li>
            <li>
              <Link to="/tippuvat_sanat">Tippuvat sanat</Link>
            </li>
            <li>
              <Link to='/Email'>Sähköposti</Link>
            </li>
            <li>
              <Link to='/Eform'>Sähköisen lomakkeen täyttö</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route path="/esimerkkitehtava1">
              <Esimerkkitehtava1 />
            </Route>
            <Route path="/Tehtava1">
              <Tehtava1 />
            </Route>
            <Route path="/Tehtava2">
              <Tehtava2 />
            </Route>
            <Route path="/kopiointi">
              <Kopiointi />
            </Route>
            <Route path="/tietosuoja">
              <Tietosuoja />
            </Route>
            <Route path="/tippuvat_kirjaimet">
              <FallingGame />
            </Route>
            <Route path="/tippuvat_sanat">
              <FallingWords />
            </Route>
            <Route path="/Email">
              <Email />
            </Route>
            <Route path="/Eform">
              <Eform />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
