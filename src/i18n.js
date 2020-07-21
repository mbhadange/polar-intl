import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationEN from './en/translation.json';
import translationDE from './de/translation.json';

import detector from "i18next-browser-languagedetector";

// the translations that we would like to make
const resources = {
    en: {
      translation: translationEN
    },
    de: {
      translation: translationDE
    }
};

i18n
  .use(detector)
  .use(reactI18nextModule) // passes i18n to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en", // if detected lng is not usable at the moment, then falls back on en

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;