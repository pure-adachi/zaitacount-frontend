import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/App.scss";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <Switch>
      <Route exact path="/zaitacount-frontend/sign-in" component={SignIn} />
      <Route
        exact
        path="/zaitacount-frontend/:year?/:month?"
        component={Home}
      />
    </Switch>
  );
};

export default App;
