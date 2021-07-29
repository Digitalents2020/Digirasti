import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Esimerkkitehtava1 from "./Esimerkkitehtava1";
import Home from "./Home";

//The Exercises can be added as their own files as demonstrated with the Esimerkkitehtava1
//This is very barebones, but does the job for now
//To create a new link to the nav bar, simply mimic the ones already there and use the name of your exercise file. Also be aware that the empty home path ("/") should be at the bottom. A switch looks through its children <Route>s and renders the first matching one, and as everyone of them starts with an "/" it will always just render the home path if it is placed above other routes.
//Have questions? Ask away!

const App = () => {
  return (
    <Router>
      <div class="App">
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/esimerkkitehtava1">Esimerkkitehtävä1</Link>
            </li>
          </ul>
        </nav>

        <div class="content">
          <Switch>
            <Route path="/esimerkkitehtava1">
              <Esimerkkitehtava1 />
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
