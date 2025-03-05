import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//Language
import es from "./locales/es/global.json";
import en from "./locales/en/global.json";
import fr from "./locales/fr/global.json";
import ch from "./locales/ch/global.json";
import hi from "./locales/hi/global.json";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: false,
    lng: "es",
    fallbackLng: "es",
    resources: {
      es: {
        global: es,
      },
      en: {
        global: en,
      },
      fr: {
        global: fr,
      },
      ch: {
        global: ch,
      },
      hi: {
        global: hi,
      },
    },
  });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
