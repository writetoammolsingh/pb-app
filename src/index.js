import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './index.scss';
import Home from "./pages/Home/Home";
import { StoreMocker as Progress } from "./pages/Progress/Progress";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/progress" component={Progress} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);
