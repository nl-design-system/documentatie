import 'react';

declare module 'react' {
  export interface CSSProperties {
    [key: `--${'example' | 'nlds' | 'denhaag' | 'utrecht'}-${string}`]: string | number | undefined;
  }
}
