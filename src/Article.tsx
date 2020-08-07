import React, { Suspense } from 'react';
import './App.css';
import { Translation, withTranslation } from 'react-i18next';
import trans from './ArticleTrans.json';
import createi18Inst from "./i18n";

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
