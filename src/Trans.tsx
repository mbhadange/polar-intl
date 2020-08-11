import { useTranslation } from 'react-i18next';

function lastIndexOf(main: string, tok: string) {

  let x = 0;

  while (true) {
    let newX = main.indexOf(tok, x + 1);
    if (newX == -1) {
      break;
    } else {
      x = newX;
    }
  }

  return x;
}

export default function useTranslationForComponent(path: string, trans: any) {
  let ns: string = path.substring(lastIndexOf(path, '/'), path.indexOf('.json'));

  let [t, i18n] = useTranslation();
  let keys = Object.keys(trans);
  for (let i = 0; i < keys.length; i++) {
    i18n.addResources(keys[i], ns, trans[keys[i]])
  }

  function newT(key: string): string {
    return t(ns + key);
  }

  return [t, i18n];
}