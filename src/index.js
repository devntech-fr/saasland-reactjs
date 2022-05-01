import React from "react";
import ReactDOM from "react-dom";
import Demo from "Demo";
import App from "App";
import * as serviceWorker from "serviceWorker";

setTimeout(
  () =>
    // the show/hide functions are passed as props
    ReactDOM.render(
      <App />,
      document.getElementById("root")
    ),
  1000
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
