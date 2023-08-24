import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
export default function BlogSidebarDesktop({ sidebar }) {
  return (
    <aside className="col col--3">
      <nav className={clsx(styles.sidebar, 'thin-scrollbar')} aria-labelledby="nav-title">
        <h2 id="nav-title" className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
          {sidebar.title}
        </h2>
        <ul className={clsx(styles.sidebarItemList, 'clean-list')}>
          {sidebar.items.map((item) => (
            <li key={item.permalink} className={styles.sidebarItem}>
              <Link
                isNavLink
                to={item.permalink}
                className={styles.sidebarItemLink}
                activeClassName={styles.sidebarItemLinkActive}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
