import type { PropsWithChildren } from 'react';
import './bold.css';

export const Bold = ({ children }: PropsWithChildren) => {
  return <span className="ma-bold">{children}</span>;
};
