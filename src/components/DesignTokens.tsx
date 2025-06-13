import { Code } from '@nl-design-system-candidate/code-react/css';
import { DataBadge } from '@nl-design-system-candidate/data-badge-react/css';
import type { TokenNode } from '@site/src/utils';
import {
  getTokenPaths,
  sortTokenPaths,
  tokenAtPath,
  tokenPathsToEmptyTokenTree,
  tokenPathToCSSCustomProperty,
  tokenPathToDottedTokenPath,
} from '@site/src/utils';
import {
  ButtonGroup as ActionGroup,
  PreserveData,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@utrecht/component-library-react/dist/css-module';
import { CopyButton } from './CopyButton';
import type { IconType } from './TokenIcon';
import { TokenIcon } from './TokenIcon';

interface Props {
  tokens: TokenNode;
}

export function DesignTokens({ tokens }: Props) {
  const tokenPaths = getTokenPaths(tokens);
  const sortedTokenPaths = sortTokenPaths(tokenPaths);
  const cssCustomPropertiesString = sortedTokenPaths
    .map((tokenPath) => tokenPathToCSSCustomProperty(tokenPath) + ': ;')
    .join('\n');
  const jsonString = JSON.stringify(tokenPathsToEmptyTokenTree(sortedTokenPaths));

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>name</TableHeaderCell>
            <TableHeaderCell>type</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedTokenPaths.map((tokenPath) => {
            const dottedTokenPath = tokenPathToDottedTokenPath(tokenPath);
            const type = tokenAtPath(tokens, tokenPath).$type as string;

            return (
              <TableRow key={dottedTokenPath}>
                <TableCell>
                  <Code>
                    <PreserveData>{dottedTokenPath}</PreserveData>
                  </Code>
                </TableCell>
                <TableCell>
                  <DataBadge>
                    <TokenIcon type={type as IconType} /> {type}
                  </DataBadge>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <ActionGroup>
        <CopyButton content={jsonString} language="json">
          Kopieer als JSON
        </CopyButton>
        <CopyButton content={cssCustomPropertiesString} language="css">
          Kopieer als CSS
        </CopyButton>
      </ActionGroup>
    </>
  );
}
