import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//import translationEN from './en/translation.json';
//import translationDE from './de/translation.json';
//import trans from './AppTrans.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {},
    lng: "en-US",

    keySeparator: '.', // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
      format: function (value, format, lng) {
        if (value instanceof Date) {
          return value.toLocaleDateString(i18n.language) + ' ' + value.toLocaleTimeString(i18n.language) + ' ' + Intl.DateTimeFormat().resolvedOptions().timeZone;
        } else if (format === "num") {
          return value.toLocaleString(i18n.language);
        }
        return value;
      }
    },

    react: {
      wait: true
    }
  })