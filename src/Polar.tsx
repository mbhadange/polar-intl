import React, { Suspense } from 'react';
import './App.css';
import { Translation, withTranslation } from 'react-i18next';
import trans from './PolarTrans.json';
import { createi18Inst, TranslatedText } from "./i18n";

//const newi18n = createi18Inst(trans);

export default function PolarInfo() {
  let i18n = createi18Inst(trans);
  return (
    <div>
      <h1><TranslatedText textkey="polar.intro" i18n={i18n} /></h1>
      <p><TranslatedText textkey="polar.info" i18n={i18n} /></p>
      <button onClick={() => i18n.changeLanguage('de')}>de</button>
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
    </div>
  );
}