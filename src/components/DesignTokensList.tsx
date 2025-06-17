import { CodeBlock } from '@nl-design-system-candidate/code-block-react/css';
import type { TokenNode } from '@site/src/utils';
import { extractTokenPaths } from '@site/src/utils';

interface Props {
  tokens: TokenNode;
}

export function DesignTokensList({ tokens }: Props) {
  const tokenPaths = extractTokenPaths(tokens);

  return <CodeBlock>{tokenPaths.map((tokenPath) => tokenPath.join('.')).join('\n')}</CodeBlock>;
}
