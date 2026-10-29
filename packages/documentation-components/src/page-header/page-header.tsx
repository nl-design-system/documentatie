import '@utrecht/page-header-css/dist/index.css';
import { PageHeader as UtrechtPageHeader } from '@utrecht/page-header-react';
import { Link } from '../components/Link';
import { Logo } from '../logo/logo';
import { LogoSmall } from '../logo/logo-small';
import { ToSearchLink } from '../search/to-search-link';
import { SearchForm } from '../search/form';
import { MobileMenuTrigger } from '../mobile-menu/mobile-menu';
import { i18n, type I18nLanguages } from '@nl-design-system-community/documentation-i18n/src/index';
import './page-header.css';

export interface PageHeaderProps {
  lang: I18nLanguages;
}

export const PageHeader = ({ lang }: PageHeaderProps) => {
  return (
    <UtrechtPageHeader className="ma-page-header">
      <div className="ma-page-header__start ma-page-header__start--visible-with-css" hidden>
        <MobileMenuTrigger lang={lang} />
      </div>
      <div className="ma-page-header__center">
        <Link href="/" aria-label={i18n[lang].logoLinkAlt} inlineBox>
          <Logo />
          <LogoSmall />
        </Link>
      </div>
      <div className="ma-page-header__end">
        <ToSearchLink lang={lang} />
        <SearchForm lang={lang} />
      </div>
    </UtrechtPageHeader>
  );
};
