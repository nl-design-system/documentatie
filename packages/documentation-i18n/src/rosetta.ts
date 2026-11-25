import rosetta from 'rosetta';
import { i18n as translations } from './index.js';

const i18n = rosetta();

Object.entries(translations).forEach(([lang, translation]) => {
  i18n.set(lang, translation);
});

i18n.locale('nl');

export const t = (key: string, params?: Record<string, unknown>): string => {
  const result = i18n.t(key, params);

  return (typeof result === 'string' && result !== '') || (typeof result === 'object' && result !== null)
    ? result
    : key;
};

export default i18n;
