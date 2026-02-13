import type { ReactNode } from 'react';
import { useIsBrowser } from '../hooks/use-is-browser';

/**
 * This component is used as an alternative to the BrowserOnly component from
 * Docusaurus since Astro can not use that component.
 * Similar to the one described here:
 * https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
 */

export interface BrowserOnlyProps {
  children: () => ReactNode;
}

export function BrowserOnly(props: BrowserOnlyProps): ReactNode | null {
  const isBrowser = useIsBrowser();

  return isBrowser ? props.children() : null;
}
