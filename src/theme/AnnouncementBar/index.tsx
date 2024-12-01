import { useThemeConfig } from '@docusaurus/theme-common';
import { useAnnouncementBar } from '@docusaurus/theme-common/internal';
import AnnouncementBarCloseButton from '@theme/AnnouncementBar/CloseButton';
import AnnouncementBarContent from '@theme/AnnouncementBar/Content';
import type { ReactElement } from 'react';

export default function AnnouncementBar(): ReactElement | null {
  const { announcementBar } = useThemeConfig();
  const { isActive, close } = useAnnouncementBar();
  if (!isActive) {
    return null;
  }
  if (announcementBar) {
    const { backgroundColor, textColor, isCloseable } = announcementBar;
    return (
      <div className="announcementBar" style={{ backgroundColor, color: textColor }} role="banner">
        {isCloseable && <div className="announcementBarPlaceholder" />}
        <AnnouncementBarContent className="announcementBarContent" />
        {isCloseable && <AnnouncementBarCloseButton onClick={close} className="announcementBarClose" />}
      </div>
    );
  } else {
    return null;
  }
}
