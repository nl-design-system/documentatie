import { Card } from '../card/card';
import { UnorderedList } from '../unordered-list/unordered-list';

export const CriteriaListItem = ({ title, sc, status, children }) => {
  return (
    <UnorderedList.Item>
      <Card heading={title} headingLevel={3}>
        <dl>
          <dt>sc:</dt>
          <dd>{sc}</dd>
          <dt>status:</dt>
          <dd>{status}</dd>
        </dl>

        {children}
      </Card>
    </UnorderedList.Item>
  );
};
