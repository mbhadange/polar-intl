import React, { Suspense } from 'react';
import './App.css';
import { withTranslation } from 'react-i18next';
import trans from './AppTrans.json';
import { createi18Inst, TranslatedText } from "./i18n";
//const newi18n = createi18Inst(trans);

import Article from './Article';
import PolarInfo from './Polar';

function HeaderComponent() {
  let i18n = createi18Inst(trans);
  return (
    <div>
      <h1><TranslatedText textkey="welcome.title" i18n={i18n} params={{ framework: 'React' }} /></h1>
      <button onClick={() => i18n.changeLanguage('de')}>de</button>
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <HeaderComponent />
        <Article />
        <PolarInfo />
      </div>
    </Suspense>
  );
}

export default App;

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
