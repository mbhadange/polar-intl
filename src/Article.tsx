import React, { useState } from 'react';
import './App.css';
//import { Translation, useTranslation } from 'react-i18next';
import trans from './ArticleTrans.json';
import useTranslationForComponent from './Trans';
//import { createi18Inst, TranslatedText } from "./i18n";

export default function Article() {
  const [t, i18n] = useTranslationForComponent(trans);
  const [val, changeVal] = useState(1);

  /*  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const current_date = new Date();
  const date = days[current_date.getDay()] + ' ';
  if (i18n.language == "de") {
    current_date.toLocaleDateString('de-DE') + ' ' + current_date.toLocaleTimeString('de-DE') + ' ' + Intl.DateTimeFormat().resolvedOptions().timeZone;
  } else {
    current_date.toLocaleDateString('en-US') + ' ' + current_date.toLocaleTimeString('en-US') + ' ' + Intl.DateTimeFormat().resolvedOptions().timeZone;
  }*/

  //AddTrans(trans, "article");
  //  i18n.addResources("en", "translation", trans["en"]);
  //  i18n.addResources("de", "translation", trans["de"]);

  function onNumChangeHandler(event: any) {
    changeVal(parseFloat(event.target.value));
  }

  return (
    <div>
      <h1>{t("title")}</h1>
      <h3>{t("subtitle", { "date": new Date() })}</h3>
      <input type="number" name="num" onInput={onNumChangeHandler} />
      <p>{t("plutest", { "count": val })}</p>
    </div>);
}