import React from "react";
// import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import App from "./components/App";
import history from "./history";
import { client } from "./middleware";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router history={history}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
