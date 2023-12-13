import { Image, Link, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import React from 'react';
import style from './HomepageFooter.module.css';

export const HomepageFooter = () => (
  <div className={clsx(style['homepage-footer'])}>
    <div className={clsx(style['homepage-footer__content'], 'container--wide')}>
      <Image
        src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/logo-gebruiker-centraal.svg"
        alt="Gebruiker Centraal Logo"
      />
      <Paragraph>
        NL Design System is onderdeel van <Link href="https://gebruikercentraal.nl">Gebruiker Centraal</Link>
      </Paragraph>
    </div>
  </div>
);
