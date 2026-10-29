import clsx from 'clsx';
import type { HTMLAttributes, PropsWithChildren } from 'react';
import './notification-banner.css';

export type NotificationBannerProps = HTMLAttributes<HTMLElement>;

export const NotificationBanner = ({
  children,
  className,
  ...restProps
}: PropsWithChildren<NotificationBannerProps>) => {
  return (
    <div className={clsx('ma-notification-banner', className)} {...restProps}>
      <div className="ma-notification-banner__content">{children}</div>
    </div>
  );
};
