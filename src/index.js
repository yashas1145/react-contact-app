import React from "react";
import { createRoot } from "react-dom";
import App from "./components/App";

const rootDiv = document.getElementById("root");
const root = createRoot(rootDiv);

root.render(
  <App/>
);