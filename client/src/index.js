import React from "react";
import ReactDOM from "react-dom";
import { GlobalProvider } from "./context/GlobalContext";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <GlobalProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
