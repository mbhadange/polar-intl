import React, { Suspense } from 'react';
import './App.css';
//import { Translation, useTranslation } from 'react-i18next';
import trans from './ArticleTrans.json';
import useTranslationForComponent from './Trans';
//import { createi18Inst, TranslatedText } from "./i18n";

export default function Article() {
  let [t, i18n] = useTranslationForComponent(trans);
  //AddTrans(trans, "article");
  //  i18n.addResources("en", "translation", trans["en"]);
  //  i18n.addResources("de", "translation", trans["de"]);
  return (
    <div>
      <h1>{t("title")}</h1>
      <h3>{t("subtitle")}</h3>
      <p>{t("intro")}</p>
      <p>{t("body")}</p>
    </div>);
}