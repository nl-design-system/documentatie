import '@utrecht/page-header-css/dist/index.css';
import { PageHeader as UtrechtPageHeader } from '@utrecht/page-header-react';
import { Logo } from '@components/logo/logo';
import { ToSearchLink } from '@components/search/to-search-link';
import { SearchForm } from '@components/search/form';
import { MobileMenuTrigger } from '@components/mobile-menu/mobile-menu';
import { i18n, type I18nLanguages } from '../../i18n';
import './page-header.css';

export interface PageHeaderProps {
  lang: I18nLanguages;
}

export const PageHeader = ({ lang }: PageHeaderProps) => {
  return (
    <UtrechtPageHeader className="ma-page-header">
      <div className="ma-page-header__start">
        <MobileMenuTrigger lang={lang} />
      </div>
      <div className="ma-page-header__center">
        <a href="/" aria-label={i18n[lang].logoLinkAlt}>
          <Logo />
        </a>
      </div>
      <div className="ma-page-header__end">
        <ToSearchLink lang={lang} />
        <SearchForm lang={lang} />
      </div>
    </UtrechtPageHeader>
  );
};
