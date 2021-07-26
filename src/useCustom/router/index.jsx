import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Clock from "../components/Clock/index";
import BetterClock from "../components/BetterClock/index";
import MagicBox from "../components/MagicBox/index";
import "./Router.css";

function RouterCustomHooks(props) {
  return (
    <Router>
      <div>
        <ul className="router-custom">
          <li className="router-custom-link">
            <Link to="/">Home</Link>
          </li>
          <li className="router-custom-link">
            <Link to="/clock">Clock</Link>
          </li>
          <li className="router-custom-link">
            <Link to="/better-clock">BetterClock</Link>
          </li>
          <li className="router-custom-link">
            <Link to="/magic-box">MagicBox</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route path="/" exact>
            <h1>React hooks- useCustom</h1>
          </Route>
          <Route path="/clock">
            <Clock />
          </Route>
          <Route path="/better-clock">
            <BetterClock />
          </Route>
          <Route path="/magic-box">
            <MagicBox />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default RouterCustomHooks;
