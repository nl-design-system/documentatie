import {
  IconBold,
  IconFileTypography,
  IconFileUnknown,
  IconLineHeight,
  IconPalette,
  IconRuler,
  IconTextSize,
  IconUnderline,
  IconPointer,
  IconNumber,
  IconShadow,
} from '@tabler/icons-react';
import { Icon } from '@utrecht/component-library-react';
import { createElement } from 'react';

// This map contains a mix of DTCG-compliant types and real-world usage of types
// which is why there are some almost-duplicates of singular and plural types.
const tokenTypeToIconMap = {
  boxShadow: IconShadow,
  color: IconPalette,
  cursor: IconPointer,
  dimension: IconRuler,
  fontFamily: IconFileTypography,
  fontFamilies: IconFileTypography,
  fontSize: IconTextSize,
  fontSizes: IconTextSize,
  fontWeight: IconBold,
  fontWeights: IconBold,
  lineHeight: IconLineHeight,
  lineHeights: IconLineHeight,
  number: IconNumber,
  other: IconFileUnknown,
  textDecoration: IconUnderline,
} as const;

export type IconType = keyof typeof tokenTypeToIconMap;

interface Props {
  type: IconType;
}

export const TokenIcon = ({ type }: Props) => {
  // Explicit fallback to 'other' if the type doesn't match
  const resolvedtype = Object.hasOwn(tokenTypeToIconMap, type) ? type : 'other';
  return <Icon>{createElement(tokenTypeToIconMap[resolvedtype])}</Icon>;
};
