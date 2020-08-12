import { useTranslation } from 'react-i18next';



export default function useTranslationForComponent(trans?: any) {

  let [t, i18n] = useTranslation();

  if (!trans) {
    return [t, i18n];
  }

  let ns: string = trans.filename;

  let keys: string[] = Object.keys(trans);
  keys.forEach((key: string) => {
    if (key === "filename") {
      return;
    }
    if (!i18n.hasResourceBundle(key, ns)) {
      i18n.addResources(key, ns, trans[key])
    } else if (i18n.getResourceBundle(key, ns) === trans[key]) {
      return;
    } else {
      let resources: any = i18n.getResourceBundle(key, ns);
      let innerkeys: string[] = Object.keys(trans[key])
      innerkeys.forEach((innerkey: string) => {
        if (!(innerkey in resources)) {
          i18n.addResource(key, ns, innerkey, trans[key][innerkey]);
        }
      });
    }
  });

  function newT(key: string, params?: any): string {
    return params ? t(ns + ':' + key, params) : t(ns + ':' + key);
  }

  return [newT, i18n];
}