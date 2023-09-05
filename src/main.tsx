import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./top.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const rootElement = document.getElementById("root");
if (rootElement) {
  // rootElement が null でないことを確認したら、render メソッドを呼び出す
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
