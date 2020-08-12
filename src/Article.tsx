import React, { useState } from 'react';
import './App.css';
//import { Translation, useTranslation } from 'react-i18next';
import trans from './ArticleTrans.json';
import useTranslationForComponent from './Trans';
//import { createi18Inst, TranslatedText } from "./i18n";

export default function Article() {
  const [t, i18n] = useTranslationForComponent(trans);
  const [val, changeVal] = useState(1);
  //AddTrans(trans, "article");
  //  i18n.addResources("en", "translation", trans["en"]);
  //  i18n.addResources("de", "translation", trans["de"]);

  function onNumChangeHandler(event: any) {
    changeVal(parseInt(event.target.value));
  }
  return (
    <div>
      <h1>{t("title")}</h1>
      <h3>{t("subtitle", { "date": new Date() })}</h3>
      <input type="number" name="num" onInput={onNumChangeHandler} />
      <p>{t("plutest", { "count": val })}</p>
    </div>);
}