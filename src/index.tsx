import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Fonts from "./assets/fonts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Fonts />
    <App />
  </React.StrictMode>,
);
