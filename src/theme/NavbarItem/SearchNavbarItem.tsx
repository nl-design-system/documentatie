import NavbarSearch from '@theme/Navbar/Search';
import type { Props } from '@theme/NavbarItem/SearchNavbarItem';
import SearchBar from '@theme/SearchBar';
import React from 'react';

export default function SearchNavbarItem({ mobile, className }: Props): React.Element | null {
  if (mobile) {
    return null;
  }

  return (
    <NavbarSearch className={className}>
      <SearchBar />
    </NavbarSearch>
  );
}
