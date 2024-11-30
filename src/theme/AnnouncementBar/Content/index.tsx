import { useThemeConfig } from '@docusaurus/theme-common';
import type { Props } from '@theme/AnnouncementBar/Content';
import clsx from 'clsx';
import React from 'react';
import './styles.css';

export default function AnnouncementBarContent(props: Props): React.Element | null {
  const { announcementBar } = useThemeConfig();
  const { content } = announcementBar!;
  return (
    <div
      {...props}
      className={clsx('content', props.className)}
      // Developer provided the HTML, so assume it's safe.

      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
