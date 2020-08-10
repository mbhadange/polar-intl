import React, { Suspense } from 'react';
import './App.css';
import { Translation, useTranslation } from 'react-i18next';
import trans from './PolarTrans.json';
import AddTrans from './Trans';

//const newi18n = createi18Inst(trans);

export default function PolarInfo() {
  let [t, i18n] = useTranslation();
  AddTrans(trans, "polar");
  return (
    <div>
      <h1>{t("polar:title")}</h1>
      <p>{t("polar:info")}</p>
    </div>);
}