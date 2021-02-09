import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Firebase from "./services/firebase";

import { FireBaseContext } from "./context/firebaseContext";

ReactDOM.render(
  <React.StrictMode>
    <FireBaseContext.Provider value={new Firebase()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FireBaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
