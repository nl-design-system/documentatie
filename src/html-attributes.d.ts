import 'react';

declare module 'react' {
  // eslint-disable-next-line -- T required to match React's HTMLAttributes<T> signature
  interface HTMLAttributes<T> {
    inert?: 'true' | undefined;
  }
}
