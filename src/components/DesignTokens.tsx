import { DesignTokensTable } from '@nl-design-system-unstable/design-tokens-table-react/css';
import { isDesignTokenDefinition } from '@nl-design-system-unstable/tokens-lib/dist/design-tokens';
import { treeToMap, addPath } from '@nl-design-system-unstable/tokens-lib/dist/ExampleTokensCSS';

export function DesignTokens({ tokens }) {
  if (!tokens) return null;

  const tokensMap = treeToMap(addPath(tokens, isDesignTokenDefinition), isDesignTokenDefinition);

  const tokensList = Array.from(tokensMap.values()).map((token) => ({
    ...token,
    value: '',
  }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <DesignTokensTable tokens={tokensList as any} tokensMap={tokensMap as any} />;
}
