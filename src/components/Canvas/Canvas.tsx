import { BrowserOnly } from '@site/src/components/BrowserOnly';
import { lazy, Suspense } from 'react';
import type { CSSProperties, ReactNode } from 'react';

interface CanvasProps {
  defaultExpandedCode?: boolean;
  displayCode?: boolean;
  code?: string | ReactNode | (() => ReactNode);
  children: ReactNode | (() => ReactNode);
  language: string;
  copy?: boolean;
  designTokens?: CSSProperties;
  editorProps?: {
    topHeadingLevel: number | undefined;
  };
}

const CanvasClient = lazy(() => import('./CanvasClient').then(({ CanvasClient }) => ({ default: CanvasClient })));

export const Canvas = (props: CanvasProps) => {
  return (
    <BrowserOnly>
      {() => (
        <Suspense>
          <CanvasClient {...props} />
        </Suspense>
      )}
    </BrowserOnly>
  );
};
