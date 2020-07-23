import React from 'react';
import i18n from './i18n';
import { withNamespaces } from 'react-i18next';

function App ({ t }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

const getCurrentLng = () => i18n.language || window.localStorage.i18nextLng || '';

  return (
    <div>
      <button onClick={() => changeLanguage(getCurrentLng)}></button>
      <h1>{t('Welcome to Polar')}</h1>
    </div>
  )
}

export default withNamespaces()(App);
