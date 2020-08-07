import React, { Suspense } from 'react';
import './App.css';
import { Translation, withTranslation } from 'react-i18next';
import trans from './ArticleTrans.json';
import { createi18Inst, TranslatedText } from "./i18n";

export default function Article() {
  let i18n = createi18Inst(trans);
  return (
    <div>
      <h1><TranslatedText textkey="header.title" i18n={i18n} /></h1>
      <h3><TranslatedText textkey="header.subtitle" i18n={i18n} /></h3>
      <p><TranslatedText textkey="content.intro" i18n={i18n} /></p>
      <p><TranslatedText textkey="content.body" i18n={i18n} /></p>
      <button onClick={() => i18n.changeLanguage('de')}>de</button>
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
    </div>);
}
