import React from 'react';
import DocNavbarItem from '@theme/NavbarItem/DocNavbarItem';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem';
import SearchNavbarItem from '@theme/NavbarItem/SearchNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import HtmlNavbarItem from '@theme/NavbarItem/HtmlNavbarItem';
import DocSidebarNavbarItem from '@theme/NavbarItem/DocSidebarNavbarItem';
import DocsVersionNavbarItem from '@theme/NavbarItem/DocsVersionNavbarItem';
import DocsVersionDropdownNavbarItem from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';

export const NavbarItem = ({ type, ...props }: any) => {
  switch (type) {
    case 'doc':
      return <DocNavbarItem {...props} />;
    case 'localeDropdown':
      return <LocaleDropdownNavbarItem {...props} />;
    case 'search':
      return <SearchNavbarItem {...props} />;
    case 'dropdown':
      return <DropdownNavbarItem {...props} />;
    case 'html':
      return <HtmlNavbarItem {...props} />;
    case 'docSidebar':
      return <DocSidebarNavbarItem {...props} />;
    case 'docsVersion':
      return <DocsVersionNavbarItem {...props} />;
    case 'docsVersionDropdown':
      return <DocsVersionDropdownNavbarItem {...props} />;

    default:
      return <DefaultNavbarItem {...props} />;
  }
};

export default NavbarItem;
