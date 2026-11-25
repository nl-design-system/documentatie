import { type PropsWithChildren } from 'react';
import { Link } from '../link/link';

export const TableOfContentsSection = ({ children }: PropsWithChildren) => (
  <section className="todo-toc-section">{children}</section>
);

export const TableOfContentsList = ({ children }: PropsWithChildren) => <ul className="todo-toc">{children}</ul>;

export const TableOfContentsListItem = ({ children }: PropsWithChildren) => (
  <li className="todo-toc__item">
    <span className="todo-toc__item-body">{children}</span>
  </li>
);

export const TableOfContentsLink = ({
  children,
  label,
  ...restProps
}: PropsWithChildren<{ href: string; label?: string }>) => (
  <Link {...restProps}>
    {label && <span className="todo-toc__item-label">{label}</span>}
    <span className="todo-toc__item-title">{children}</span>
  </Link>
);
