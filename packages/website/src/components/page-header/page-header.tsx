import '@utrecht/page-header-css/dist/index.css';
import { PageHeader as UtrechtPageHeader } from '@utrecht/page-header-react';
import { Logo } from '@components/logo/logo';
import { ToSearchLink } from '@components/search/to-search-link';
import { SearchForm } from '@components/search/form';
import { MobileMenuTrigger } from '@components/mobile-menu/mobile-menu';
import './page-header.css';

export const PageHeader = () => {
  return (
    <UtrechtPageHeader className="ma-page-header">
      <div className="ma-page-header__start">
        <MobileMenuTrigger />
      </div>
      <div className="ma-page-header__center">
        <a href="/" aria-label="NL Design System logo, naar de homepage">
          <Logo />
        </a>
      </div>
      <div className="ma-page-header__end">
        <ToSearchLink />
        <SearchForm />
      </div>
    </UtrechtPageHeader>
  );
};
