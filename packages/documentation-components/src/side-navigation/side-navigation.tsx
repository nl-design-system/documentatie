// export { SideNavigation } from '@gemeente-denhaag/side-navigation';
import { SideNavigationBase, SideNavigationList } from '@gemeente-denhaag/side-navigation';
import { type HTMLAttributes } from 'react';
import { SideNavigationTreeItemSummaryElement, type SideNavigationTreeItemProps } from './side-navigation-item';
import '@gemeente-denhaag/side-navigation/index.css';
import '@gemeente-denhaag/iconbutton/index.css';
import './side-navigation.css';

export interface SideNavigationProps extends HTMLAttributes<HTMLElement> {
  openLabel?: string;
  closeLabel?: string;
  items: SideNavigationTreeItemProps[][];
}

export const SideNavigation = ({ closeLabel, items, openLabel, ...props }: SideNavigationProps) => {
  return (
    <SideNavigationBase {...props}>
      {items.map((item, index) => (
        <SideNavigationList key={index}>
          {item.map((subItem, subIndex) => (
            <SideNavigationTreeItemSummaryElement
              key={subIndex}
              {...subItem}
              openLabel={openLabel}
              closeLabel={closeLabel}
            />
          ))}
        </SideNavigationList>
      ))}
    </SideNavigationBase>
  );
};
