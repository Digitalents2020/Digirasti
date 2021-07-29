import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Esimerkkitehtava1 from "./Esimerkkitehtava1";
import Home from "./Home";
import Kopiointi from "./Tehtävät/kopiointi";

//The Exercises can be added as their own files as demonstrated with the Esimerkkitehtava1
//This is very barebones, but does the job for now
//To create a new link to the nav bar, simply mimic the ones already there and use the name of your exercise file
//Have questions? Ask away!

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/esimerkkitehtava1">Esimerkkitehtävä1</Link>
            </li>
            <li>
              <Link to="kopiointi">Kopiointitehtävä</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Switch>
            <Route path="/esimerkkitehtava1">
              <Esimerkkitehtava1 />
            </Route>
            <Route path="kopiointitehtävä">
              <Kopiointi />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
