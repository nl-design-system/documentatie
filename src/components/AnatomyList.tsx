import type { HTMLAttributes } from 'react';
import './AnatomyList.css';

export type AnatomyListProps = HTMLAttributes<HTMLOListElement>;

export const AnatomyList = ({ children }: AnatomyListProps) => <ol className="nlds-anatomy-list">{children}</ol>;

export type AnatomyListItemProps = HTMLAttributes<HTMLLIElement>;

export const AnatomyListItem = ({ children }: AnatomyListItemProps) => (
  <li className="nlds-anatomy-list__item">{children}</li>
);
