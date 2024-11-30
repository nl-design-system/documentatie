import type { Props } from '@theme/Footer/Layout';
import clsx from 'clsx';
import React from 'react';
import './Layout.css';

export default function FooterLayout({ style, links, logo, copyright }: Props): React.Element {
  return (
    <footer
      className={clsx(
        'footer',
        {
          'footer--dark': style === 'dark',
        },
        'footer',
      )}
    >
      <div className="container--wide">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
