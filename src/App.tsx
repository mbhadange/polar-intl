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

function getBrowserLocales(options = {}) {
  const defaultOptions = {
    languageCodeOnly: false,
  };

  const opt = {
    ...defaultOptions,
    ...options,
  };

  const browserLocales =
    navigator.languages === undefined
      ? [navigator.language]
      : navigator.languages;

  if (!browserLocales) {
    return undefined;
  }

  return browserLocales.map(locale => {
    const trimmedLocale = locale.trim();

    return opt.languageCodeOnly
      ? trimmedLocale.split(/-|_/)[0]
      : trimmedLocale;
  });
}

const locales = getBrowserLocales({languageCodeOnly : true});
const getCurrentLng = locales[0];

  return (
    <div>
      <button onClick={() => changeLanguage(getCurrentLng)}></button>
      <h1>{t(getCurrentLng)}</h1>
    </div>
  )
}

export default withNamespaces()(App);

*/