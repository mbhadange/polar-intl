import React, { Suspense } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';

function HeaderComponent() {
  const [t, i18n] = useTranslation();
  return <div>
    <h1>{t('welcome.title', { framework: 'React' })}</h1>
    <button onClick={() => i18n.changeLanguage('de')}>de</button>
    <button onClick={() => i18n.changeLanguage('en')}>en</button>
  </div>
}

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <HeaderComponent />
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
