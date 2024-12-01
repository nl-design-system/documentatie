import NavbarSearch from '@theme/Navbar/Search';
import type { Props } from '@theme/NavbarItem/SearchNavbarItem';
import SearchBar from '@theme/SearchBar';
import type { ReactElement } from 'react';

export default function SearchNavbarItem({ mobile, className }: Props): ReactElement | null {
  if (mobile) {
    return null;
  }

  return (
    <NavbarSearch className={className}>
      <SearchBar />
    </NavbarSearch>
  );
}
