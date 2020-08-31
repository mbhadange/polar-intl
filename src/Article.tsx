import React, { useState } from 'react';
import trans from './ArticleTrans.json';
import useTranslationForComponent from './Trans';

export default function Article() {
  const [t, i18n] = useTranslationForComponent(trans);
  const [val, changeVal] = useState(1);

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