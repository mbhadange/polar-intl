import React, { Suspense } from 'react';
import './App.css';
import trans from './AppTrans.json';
import useTranslationForComponent from './Trans';

import Article from './Article';
import PolarInfo from './Polar';


function HeaderComponent() {
  const [t, i18n] = useTranslationForComponent(trans);
  return (
    <div>
      <h1>{t("title", { framework: 'Polar' })}</h1>
    </div>
  );
}

function App() {
  const [t, i18n] = useTranslationForComponent();
  return (
    <Suspense fallback="loading">
      <div className="App">
        <HeaderComponent />
        <Article />
        <PolarInfo />
        <button onClick={() => i18n.changeLanguage('de-DE')}>de</button>
        <button onClick={() => i18n.changeLanguage('en-US')}>en</button>
      </div>
    </Suspense>
  );
}

export default App;

/*
        <Article />
        <PolarInfo />

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
