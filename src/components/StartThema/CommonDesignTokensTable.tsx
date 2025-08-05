import { DesignTokensTable } from '@nl-design-system-unstable/design-tokens-table-react/css';
// TODO: Publish and switch over to @nl-design-system-unstable/start-design-tokens
import tokenList from './list.json';
// import tokenList from '@nl-design-system-unstable/basis-design-tokens/dist/list.json';
import './CommonDesignTokensTable.css';

export const CommonDesignTokensTable = ({ type, item, subitem, maxPathLength = Infinity }) => {
  const tokens = tokenList.filter(
    (token) =>
      token.attributes.category === 'basis' &&
      token.attributes.type === type &&
      (item === undefined || token.attributes.item === item) &&
      (subitem === undefined || token.attributes.subitem === subitem) &&
      token.path.length <= maxPathLength,
  );

  return (
    <>
      <DesignTokensTable tokens={tokens}></DesignTokensTable>
    </>
  );
};
