import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import smoothscroll from "smoothscroll-polyfill";
import { ThemeProvider } from "./context/ThemeContext";

smoothscroll.polyfill();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
