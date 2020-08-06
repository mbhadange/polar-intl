import React, { Suspense } from 'react';
import './App.css';
import { Translation, withTranslation } from 'react-i18next';
import trans from './ArticleTrans.json';
import createi18Inst from "./i18n";

//const newi18n = createi18Inst(trans);

export default function Article() {
  return (
    <Translation i18n={createi18Inst(trans)}>
      {
        (t, { i18n }) => (
          <div>
            <h1>{t('header.title')}</h1>
            <h3>{t('header.subtitle')}</h3>
            <p>{t('content.intro')}</p>
            <p>{t('content.body')}</p>
            <button onClick={() => i18n.changeLanguage('de')}>de</button>
            <button onClick={() => i18n.changeLanguage('en')}>en</button>
          </div>
        )
      }
    </Translation>);
}
/*

import React from 'react';
import i18n from './i18n';
import { withNamespaces } from 'react-i18next';

function App ({ t }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div>
      <button onClick={() => changeLanguage('de')}>de</button>
      <button onClick={() => changeLanguage('en')}>en</button>
      <h1>{t('Welcome to Polar')}</h1>
    </div>
  )
}

export default withNamespaces()(App);

*/
