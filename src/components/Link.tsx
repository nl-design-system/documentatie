import DocusaurusLink from '@docusaurus/Link';
import type { Props } from '@docusaurus/Link';
import { clsx } from 'clsx';

import type { PropsWithChildren } from 'react';

export const Link = ({ className, href, ...props }: PropsWithChildren<Props>) => {
  // Links to files with the ".ics" file extension are downloads.
  // Downloads should be ignored by crawlers such as Algolia, resulting in less crawler warnings.
  const download = /\.ics([?#]|$)/i.test(href);
  console.log(href, download);
  return (
    <DocusaurusLink
      className={clsx('utrecht-link', 'utrecht-link--html-a', download && 'utrecht-link--download', className)}
      href={href}
      download={download}
      {...props}
    />
  );
};
