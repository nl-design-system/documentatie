import type { Props } from '@theme/MDXComponents/Img';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

function transformImgClassName(className?: string): string {
  return clsx(className, styles.img);
}

export default function MDXImg(props: Props): React.Element {
  return <img loading="lazy" {...props} className={transformImgClassName(props.className)} />;
}
