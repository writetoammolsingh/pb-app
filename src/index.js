import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reduxThunk from "redux-thunk";
import reportWebVitals from './reportWebVitals';
import RootReducer from './reducers';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import Home from "./pages/Home/Home";
import Progress from "./pages/Progress/Progress";

const store = createStore(RootReducer, applyMiddleware(reduxThunk));

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
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
