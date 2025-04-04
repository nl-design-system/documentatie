import type { Props } from '@theme/Footer/Copyright';
import type { ReactElement } from 'react';

export default function FooterCopyright({ copyright }: Props): ReactElement {
  return (
    <div
      className="footer__copyright"
      // Developer provided the HTML, so assume it's safe.

      dangerouslySetInnerHTML={{ __html: copyright }}
    />
  );
}
