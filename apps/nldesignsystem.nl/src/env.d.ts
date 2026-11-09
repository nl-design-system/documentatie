/// <reference types="astro/client" />
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export {};

declare global {
  /**
   * A global set of pages that are unlisted. This set is filled during the
   * generation of the content collections.
   */
  var unlistedPages: Set<string>;

  var isAstro: boolean | undefined;
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ma-mobile-menu-trigger': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
