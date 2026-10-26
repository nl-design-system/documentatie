import { Markdown } from './Markdown';
import React, { type PropsWithChildren } from 'react';
import { AnatomyList, AnatomyListItem } from './AnatomyList';
import './ComponentAnatomy.css';

interface IllustrationProps {
  className?: string;
  height?: boolean;
}

interface ComponentAnatomyProps {
  illustration?: React.ComponentType<IllustrationProps>;
  anatomyMarkdown?: string;
}

export const ComponentAnatomy = ({
  illustration: AnatomyIllustration,
  anatomyMarkdown,
}: PropsWithChildren<ComponentAnatomyProps>) => {
  return (
    <figure className="ma-component-anatomy">
      {/* {AnatomyIllustration && <AnatomyIllustration height={null} className="ma-component-anatomy__illustration" />} */}
      {AnatomyIllustration && anatomyMarkdown && (
        <figcaption>
          <pre>{anatomyMarkdown}</pre>
          <Markdown
            omitH1
            headingLevel={1}
            components={{
              ol: ({ children }) => <AnatomyList>{children}</AnatomyList>,
              li: ({ children }) => <AnatomyListItem>{children}</AnatomyListItem>,
            }}
            content={anatomyMarkdown}
          />
        </figcaption>
      )}
    </figure>
  );
};
