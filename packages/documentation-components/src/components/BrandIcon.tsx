import type { ReactElement } from 'react';
import {
  IconBrandFigma,
  IconBrandGithub,
  IconBrandNpm,
  IconBrandStorybook,
  IconExternalLink,
} from '@tabler/icons-react';
import { Icon } from '../icon/icon.tsx';

const brandMap: Record<string, ReactElement> = {
  figma: <IconBrandFigma />,
  github: <IconBrandGithub />,
  npm: <IconBrandNpm />,
  storybook: <IconBrandStorybook />,
};

interface BrandIconProps {
  brand: string;
}

export const BrandIcon = ({ brand }: BrandIconProps) => <Icon>{brandMap[brand] || <IconExternalLink />}</Icon>;
