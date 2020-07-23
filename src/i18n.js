import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

// imports the translations from the "./public/locales/" folder
import backend from "i18next-xhr-backend";

//import translationEN from './en/translation.json';
//import translationDE from './de/translation.json';

import detector from "i18next-browser-languagedetector";

i18n
  .use(detector)
  .use(backend)
  .use(reactI18nextModule) // passes i18n to react-i18next
  .init({
    lng: "en",
    fallbackLng: "en", // if detected lng is not usable at the moment, then falls back on en

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    react: {
      wait: true
    }
  });

export default i18n;