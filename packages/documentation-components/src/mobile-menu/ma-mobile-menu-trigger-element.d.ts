import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { MaMobileMenuTrigger } from './mobile-menu-trigger-element';

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'ma-mobile-menu-trigger': DetailedHTMLProps<HTMLAttributes<MaMobileMenuTrigger>, MaMobileMenuTrigger>;
    }
  }
}
