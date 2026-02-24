import { useEffect, useState } from 'react';

export function useIsBrowser() {
  const [isBrowser, setIsBrowser] = useState<boolean | undefined>();

  useEffect(() => setIsBrowser(true), []);

  return isBrowser;
}
