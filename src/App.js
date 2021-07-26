import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Esimerkkitehtava1 from "./Esimerkkitehtava1";
import Home from "./Home";

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
