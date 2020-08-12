import React, { Suspense } from 'react';
import './App.css';
import { Translation, useTranslation } from 'react-i18next';
import trans from './PolarTrans.json';
import useTranslationForComponent from './Trans';

//const newi18n = createi18Inst(trans);

export default function PolarInfo() {
  let [t, i18n] = useTranslationForComponent(trans);
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("info")}</p>
    </div>);
}