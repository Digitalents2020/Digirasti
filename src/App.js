import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Esimerkkitehtava1 from "./Esimerkkitehtava1";
import Tehtava1 from "./Tehtävät/Tehtava1";
import Tehtava2 from "./Tehtävät/Tehtava2";
import Home from "./Home";
import Kopiointi from "./Tehtävät/Kopiointi";
import Tietosuoja from "./Tehtävät/Tietosuoja";

//The Exercises can be added as their own files as demonstrated with the Esimerkkitehtava1
//This is very barebones, but does the job for now
//To create a new link to the nav bar, simply mimic the ones already there and use the name of your exercise file. Also be aware that the empty home path ("/") should be at the bottom. A switch looks through its children <Route>s and renders the first matching one, and as everyone of them starts with an "/" it will always just render the home path if it is placed above other routes.
//Have questions? Ask away!

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
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
              <Link to="/">home</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Switch>
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
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
