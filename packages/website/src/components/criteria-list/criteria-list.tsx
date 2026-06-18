import { IconChevronDown } from '@tabler/icons-react';
import { UnorderedList } from '@amsterdam/design-system-react';
import '@utrecht/accordion-css/dist/index.css';
import '@nl-design-system-candidate/button-css/button.css';
import './criteria-list.css';

export const CriteriaList = ({ testCategory, children }) => {
  return (
    <div className="ma-criteria-list">
      <div className="utrecht-accordion">
        <details className="utrecht-accordion__section">
          <summary className="utrecht-accordion__header">
            <span className="nl-button nl-button--subtle">
              <span className="nl-button__icon-start">
                <IconChevronDown />
              </span>
              <span className="nl-button__label">{testCategory}</span>
            </span>
          </summary>

          <div className="utrecht-accordion__panel">
            <UnorderedList markers={false}>{children}</UnorderedList>
          </div>
        </details>
      </div>
    </div>
  );
};
