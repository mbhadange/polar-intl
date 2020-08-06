import React, { Suspense } from 'react';
import './App.css';
import { Translation, withTranslation } from 'react-i18next';
import trans from './PolarTrans.json';
import createi18Inst from "./i18n";

//const newi18n = createi18Inst(trans);

export default function PolarInfo() {
  return (
    <Translation i18n={createi18Inst(trans)}>
      {
        (t, { i18n }) => (
          <div>
            <h1>{t('polar.intro')}</h1>
            <p>{t('polar.info')}</p>
            <button onClick={() => i18n.changeLanguage('de')}>de</button>
            <button onClick={() => i18n.changeLanguage('en')}>en</button>
          </div>
        )
      }
    </Translation>);
}