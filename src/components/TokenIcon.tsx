import {
  IconBold,
  IconFileTypography,
  IconFileUnknown,
  IconLineHeight,
  IconPalette,
  IconRuler,
  IconTextSize,
  IconUnderline,
} from '@tabler/icons-react';
import { Icon } from '@utrecht/component-library-react';
import { createElement } from 'react';

const tokenTypeToIconMap = {
  color: IconPalette,
  dimension: IconRuler,
  fontFamilies: IconFileTypography,
  fontSizes: IconTextSize,
  fontWeights: IconBold,
  lineHeights: IconLineHeight,
  other: IconFileUnknown,
  textDecoration: IconUnderline,
} as const;

export type IconType = keyof typeof tokenTypeToIconMap;

interface Props {
  type: IconType;
}

export const TokenIcon = ({ type }: Props) => <Icon>{createElement(tokenTypeToIconMap[type])}</Icon>;
