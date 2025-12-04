import clsx from 'clsx';
import type { ReactElement } from 'react';
import './styles.css';

function transformImgClassName(className?: string): string {
  return clsx(className, 'img');
}

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

export default function MDXImg(props: Props): ReactElement {
  return <img loading="lazy" {...props} className={transformImgClassName(props.className)} />;
}
