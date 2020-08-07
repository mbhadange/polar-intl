import React from 'react';
import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";

function createi18Inst(trans: any): typeof i18n {
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

function TranslatedText(props: { textkey: string, i18n: typeof i18n, params?: object }) {
  return (
    <Translation i18n={props.i18n}>
      {
        (t, { i18n }) => (t(props.textkey, props.params))
      }
    </Translation>);
}

export { createi18Inst, TranslatedText };