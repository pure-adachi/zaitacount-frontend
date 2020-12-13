import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/App.scss";
import Home from "./pages/Home";

const App = () => {
  return (
    <Switch>
      <Route exact path="/zaitacount-frontend/" component={Home} />
    </Switch>
  );
};

export default App;
