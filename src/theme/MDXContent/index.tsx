import { MDXProvider } from '@mdx-js/react';
import Admonition from '@theme-original/Admonition';
import MDXDetails from '@theme/MDXComponents/Details';
import MDXPre from '@theme/MDXComponents/Pre';
import {
  Code,
  Emphasis,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Image,
  Link,
  OrderedList,
  UnorderedList,
} from '@utrecht/component-library-react/dist/css-module';
import type { ReactElement, ReactNode } from 'react';
import { isValidElement } from 'react';
import { OverviewPage } from '@site/src/components/OverviewPage';
import DocCardList from '@theme/DocCardList';
import { ComponentOverview } from '@site/src/components/ComponentOverview';
import { Checklist, ChecklistItem } from '@site/src/components/Checklist';
import { ComponentAnatomy } from '@site/src/components/ComponentAnatomy';
import { CriteriaList, CriteriaListItem } from '@site/src/components/ComponentCriteriaList';
import { TaskList, TaskListItem } from '@nl-design-system-community/ma-task-list-react/dist/ma-task-list.mjs';

interface Props {
  children: ReactNode;
}

export default function MDXContent({ children }: Props): ReactElement {
  return (
    <MDXProvider
      components={{
        code: Code,
        a: Link,
        em: Emphasis,
        pre: MDXPre,
        details: MDXDetails,
        ul: (props) => {
          return props.className?.includes('contains-task-list') ? (
            <TaskList>
              {(Array.isArray(props.children) ? props.children : [props.children])
                .filter(isValidElement)
                .map((child) => {
                  const { children } = (child as ReactElement).props;
                  const checkbox = children.find((child) => typeof child === 'object');
                  const label = Array.isArray(children) ? children.filter((child) => typeof child === 'string') : [];
                  return (
                    <TaskListItem
                      key={label.join('')}
                      checked={checkbox.props.checked}
                      description={[...label].join('')}
                    />
                  );
                })}
            </TaskList>
          ) : (
            <UnorderedList className="utrecht-unordered-list--html-content">{props.children}</UnorderedList>
          );
        },
        ol: ({ children }) => {
          return <OrderedList className="utrecht-ordered-list--html-content">{children}</OrderedList>;
        },
        img: Image,
        h1: Heading1,
        h2: Heading2,
        h3: Heading3,
        h4: Heading4,
        h5: Heading5,
        h6: Heading6,
        admonition: Admonition,

        OverviewPage,
        DocCardList,
        ComponentOverview,
        Checklist,
        ChecklistItem,
        ComponentAnatomy,
        CriteriaList,
        CriteriaListItem,
      }}
    >
      {children}
    </MDXProvider>
  );
}
