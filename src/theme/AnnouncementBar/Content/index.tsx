import { useThemeConfig } from '@docusaurus/theme-common';
import type { Props } from '@theme/AnnouncementBar/Content';
import clsx from 'clsx';
import type { ReactElement } from 'react';

export default function AnnouncementBarContent(props: Props): ReactElement | null {
  const { announcementBar } = useThemeConfig();

  return announcementBar?.content ? (
    <div
      {...props}
      className={clsx('content', props.className)}
      // Developer provided the HTML, so assume it's safe.

      dangerouslySetInnerHTML={{ __html: announcementBar.content }}
    />
  ) : null;
}
