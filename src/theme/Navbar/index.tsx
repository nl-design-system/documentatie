import NavbarContent from '@theme/Navbar/Content';
import NavbarLayout from '@theme/Navbar/Layout';
import type { ReactElement } from 'react';

export default function Navbar(): ReactElement {
  return (
    <NavbarLayout>
      <NavbarContent />
    </NavbarLayout>
  );
}
