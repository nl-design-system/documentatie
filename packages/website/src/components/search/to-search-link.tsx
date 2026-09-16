import { IconSearch } from '@tabler/icons-react';
import '@nl-design-system-candidate/button-css/button.css';
import { i18n, type I18nLanguages } from '../../i18n';

export interface ToSearchLinkProps {
  lang: I18nLanguages;
}

export const ToSearchLink = ({ lang }: ToSearchLinkProps) => {
  return (
    <a className="ma-to-search-link nl-button nl-button--subtle" href="/zoeken">
      <span className="nl-button__icon-start">
        <IconSearch />
      </span>
      <span className="nl-button__label">{i18n[lang].search}</span>
    </a>
  );
};
