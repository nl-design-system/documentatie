import { Heading as NLHeading, type HeadingProps as NLHeadingProps } from '@nl-design-system-candidate/heading-react';
import '@nl-design-system-candidate/heading-css/heading.css';

export const Heading = (props: HeadingProps) => <NLHeading {...props} />;
export const Heading1 = (props: Omit<HeadingProps, 'level'>) => <NLHeading {...props} level={1} />;
export const Heading2 = (props: Omit<HeadingProps, 'level'>) => <NLHeading {...props} level={2} />;
export const Heading3 = (props: Omit<HeadingProps, 'level'>) => <NLHeading {...props} level={3} />;
export const Heading4 = (props: Omit<HeadingProps, 'level'>) => <NLHeading {...props} level={4} />;
export const Heading5 = (props: Omit<HeadingProps, 'level'>) => <NLHeading {...props} level={5} />;
export const Heading6 = (props: Omit<HeadingProps, 'level'>) => <NLHeading {...props} level={6} />;

export type HeadingProps = NLHeadingProps;
