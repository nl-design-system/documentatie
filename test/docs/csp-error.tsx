import { PropsWithChildren, useEffect, useRef } from 'react';

/**
 * this component intentionally introduces a CSP violation. It needs to bypass
 * Reacts `style={{}}` handling to do so
 */
export const DivWithStyle = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.setAttribute('style', 'background-color: red');
  }, []);

  return <div ref={ref}>{children}</div>;
};
