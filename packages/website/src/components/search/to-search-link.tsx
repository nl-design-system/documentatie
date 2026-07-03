import { IconSearch } from '@tabler/icons-react';
import '@nl-design-system-candidate/button-css/button.css';

export const ToSearchLink = () => {
  return (
    <a className="ma-to-search-link nl-button nl-button--subtle" href="/zoeken">
      <span className="nl-button__icon-start">
        <IconSearch />
      </span>
      <span className="nl-button__label">Zoeken</span>
    </a>
  );
};
