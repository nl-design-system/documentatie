import type { Props } from '@theme/MDXComponents/Img';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

function transformImgClassName(className?: string): string {
  return clsx(className, styles.img);
}

export default function MDXImg(props: Props): JSX.Element {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img loading="lazy" {...props} className={transformImgClassName(props.className)} />
  );
}
