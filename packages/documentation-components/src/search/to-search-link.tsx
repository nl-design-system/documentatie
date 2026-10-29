import { Icon } from '../icon/icon';
import { IconSearch } from '../functional-icon';
import '@nl-design-system-candidate/button-css/button.css';
import { i18n, type I18nLanguages } from '@nl-design-system-community/documentation-i18n/src/index';

export interface ToSearchLinkProps {
  lang: I18nLanguages;
}

export const ToSearchLink = ({ lang }: ToSearchLinkProps) => {
  return (
    <a className="ma-to-search-link nl-button nl-button--subtle" href="/zoeken">
      <span className="nl-button__icon-start">
        <Icon>
          <IconSearch />
        </Icon>
      </span>
      <span className="nl-button__label">{i18n[lang].search}</span>
    </a>
  );
};
