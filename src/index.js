import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ReactFCCtest from "react-fcctest";
ReactDOM.render(
  <React.StrictMode>
    <ReactFCCtest />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
