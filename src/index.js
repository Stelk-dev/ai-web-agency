import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "./style/views.css";
import "./style/style.css";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import global_en from "./i18n/en/global.json";
import global_it from "./i18n/it/global.json";
const root = ReactDOM.createRoot(document.getElementById("root"));

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: localStorage.getItem("lng") ?? "en",
  resources: {
    en: { global: global_en },
    it: { global: global_it },
  },
});

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
