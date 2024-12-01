import { useColorMode, useThemeConfig } from '@docusaurus/theme-common';
import ColorModeToggle from '@theme/ColorModeToggle';
import type { Props } from '@theme/Navbar/ColorModeToggle';
import type { ReactElement } from 'react';

export default function NavbarColorModeToggle({ className }: Props): ReactElement | null {
  const navbarStyle = useThemeConfig().navbar.style;
  const disabled = useThemeConfig().colorMode.disableSwitch;
  const { colorMode, setColorMode } = useColorMode();

  if (disabled) {
    return null;
  }

  return (
    <ColorModeToggle
      className={className}
      buttonClassName={navbarStyle === 'dark' ? 'darkNavbarColorModeToggle' : undefined}
      value={colorMode}
      onChange={setColorMode}
    />
  );
}
