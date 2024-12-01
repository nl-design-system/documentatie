import { translate } from '@docusaurus/Translate';
import type { Props } from '@theme/AnnouncementBar/CloseButton';
import IconClose from '@theme/Icon/Close';
import clsx from 'clsx';
import type { ReactElement } from 'react';

export default function AnnouncementBarCloseButton(props: Props): ReactElement | null {
  return (
    <button
      type="button"
      aria-label={translate({
        id: 'theme.AnnouncementBar.closeButtonAriaLabel',
        message: 'Close',
        description: 'The ARIA label for close button of announcement bar',
      })}
      {...props}
      className={clsx('clean-btn close', 'closeButton', 'className')}
    >
      <IconClose width={14} height={14} strokeWidth={3.1} />
    </button>
  );
}
