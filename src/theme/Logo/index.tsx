import { Link } from '@site/src/components/Link';
import { type NavbarLogo, useThemeConfig } from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type { Props } from '@theme/Logo';
import ThemedImage from '@theme/ThemedImage';
import type { ReactElement } from 'react';

function LogoThemedImage({ logo, alt, imageClassName }: { logo: NavbarLogo; alt: string; imageClassName?: string }) {
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };
  const themedImage = (
    <ThemedImage
      className={logo.className}
      sources={sources}
      height={logo.height}
      width={logo.width}
      alt={alt}
      style={logo.style}
    />
  );

  // Is this extra div really necessary?
  // introduced in https://github.com/facebook/docusaurus/pull/5666
  return imageClassName ? <div className={imageClassName}>{themedImage}</div> : themedImage;
}

export default function Logo(props: Props): ReactElement {
  const {
    siteConfig: { title },
  } = useDocusaurusContext();
  const {
    navbar: { title: navbarTitle, logo },
  } = useThemeConfig();

  const { shouldRender: isMobile } = useNavbarMobileSidebar();

  const { imageClassName, titleClassName, ...propsRest } = props;
  const logoLink = useBaseUrl(logo?.href || '/');

  // If visible title is shown, fallback alt text should be
  // an empty string to mark the logo as decorative.
  const fallbackAlt = navbarTitle ? '' : title;

  // Use logo alt text if provided (including empty string),
  // and provide a sensible fallback otherwise.
  const alt = logo?.alt ?? fallbackAlt;

  return (
    <Link to={logoLink} {...propsRest} {...(logo?.target && { target: logo.target })}>
      {logo && !isMobile && <LogoThemedImage logo={logo} alt={alt} imageClassName={imageClassName} />}
      {navbarTitle && <b className={titleClassName}>{navbarTitle}</b>}
    </Link>
  );
}
