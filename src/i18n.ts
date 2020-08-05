import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//import translationEN from './en/translation.json';
//import translationDE from './de/translation.json';
//import trans from './AppTrans.json';

export default function createi18Inst(trans: any): typeof i18n {
  let newi18n = i18n.createInstance({
    resources: trans,
    lng: "en",

    keySeparator: '.', // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    react: {
      wait: true
    }
  }, (err, t) => {
    if (err) return console.log('Error while loading', err);
    t('key')
  });
  newi18n.use(initReactI18next);
  return newi18n;
}