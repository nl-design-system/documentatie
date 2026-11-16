import '@utrecht/page-header-css/dist/index.css';
import { i18n, type I18nLanguages } from '@nl-design-system-community/documentation-i18n/src/index.ts';
import { PageHeader as UtrechtPageHeader } from '@utrecht/page-header-react';
import { Link } from '../link/link.tsx';
import { LogoSmall } from '../logo/logo-small.tsx';
import { Logo } from '../logo/logo.tsx';
import { MobileMenuTrigger } from '../mobile-menu/mobile-menu.tsx';
import { SearchForm } from '../search/form.tsx';
import { ToSearchLink } from '../search/to-search-link.tsx';
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
