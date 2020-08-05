import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//import translationEN from './en/translation.json';
//import translationDE from './de/translation.json';
import trans from './AppTrans.json';

i18n
  .use(initReactI18next) // passes i18n to react-i18next
  .init({
    resources: trans,
    lng: "en",

    keySeparator: '.', // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    react: {
      wait: true
    }
  });

export default i18n;