import { useTranslation } from 'react-i18next';

export default function AddTrans(trans: any, ns: string) {
  let [t, i18n] = useTranslation();
  let keys = Object.keys(trans);
  for (let i = 0; i < keys.length; i++) {
    i18n.addResources(keys[i], ns, trans[keys[i]])
  }
}