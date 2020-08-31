import React, { Suspense } from 'react';
import './App.css';
import useTranslationForComponent from './Trans';

import Article from './Article';

function App() {
  const [t, i18n] = useTranslationForComponent();
  return (
    <Suspense fallback="loading">
      <div className="App">
        <Article />
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
