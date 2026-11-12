import { Code } from '../code/code.tsx';
import { DataBadge } from '../data-badge/data-badge.tsx';
import type { TokenNode } from '../utils.ts';
import {
  getTokenPaths,
  sortTokenPaths,
  tokenAtPath,
  tokenPathToCSSCustomProperty,
  tokenPathToDottedTokenPath,
} from '../utils.ts';
import {
  PreserveData,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@utrecht/component-library-react';
import { ActionGroup } from '../action-group/action-group.tsx';
import { CopyButton } from './CopyButton.tsx';
import type { IconType } from './TokenIcon.tsx';
import { TokenIcon } from './TokenIcon.tsx';
import type { BaseDesignToken } from '@nl-design-system-community/design-tokens-schema';
import { cloneDeepWith } from 'es-toolkit/object';

interface Props {
  tokens: TokenNode;
}

type DesignTokenDefinition = Omit<BaseDesignToken, '$value'>;

export const isTokenDefinition = (obj: unknown): obj is DesignTokenDefinition => {
  // Must have a `$type: string`
  return (
    obj !== null &&
    typeof obj === 'object' &&
    Object.hasOwn(obj, '$type') &&
    typeof (obj as never)['$type'] === 'string'
  );
};

export function DesignTokens({ tokens }: Props) {
  const tokenPaths = getTokenPaths(tokens);
  const cleanTokens = cloneDeepWith(tokens, (obj) =>
    isTokenDefinition(obj)
      ? {
          $type: obj['$type'],
          $value: '',
        }
      : undefined,
  );

  const sortedTokenPaths = sortTokenPaths(tokenPaths);
  const cssCustomPropertiesString = sortedTokenPaths
    .map((tokenPath) => tokenPathToCSSCustomProperty(tokenPath) + ': ;')
    .join('\n');
  const jsonString = JSON.stringify(cleanTokens, null, 2);

  return (
    <div className="ma-flow">
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
        <CopyButton content={jsonString}>Kopieer als JSON</CopyButton>
        <CopyButton content={cssCustomPropertiesString}>Kopieer als CSS</CopyButton>
      </ActionGroup>
    </div>
  );
}
