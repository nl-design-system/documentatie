// export { SideNavigation } from '@gemeente-denhaag/side-navigation';
import { SideNavigationBase, SideNavigationList } from '@gemeente-denhaag/side-navigation';
import { SideNavigationTreeItemSummaryElement, type SideNavigationTreeItemProps } from './side-navigation-item';
import '@gemeente-denhaag/side-navigation/index.css';
import '@gemeente-denhaag/iconbutton/index.css';
import './side-navigation.css';

export interface SideNavigationProps {
  openLabel?: string;
  closeLabel?: string;
  items: SideNavigationTreeItemProps[][];
}

export const SideNavigation = ({ items, openLabel, closeLabel }: SideNavigationProps) => {
  return (
    <SideNavigationBase>
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
