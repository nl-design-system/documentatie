import { Icon } from '../icon/icon.tsx';
import {
  IconBrandFigma,
  IconBrandGithub,
  IconBrandNpm,
  IconBrandStorybook,
  IconExternalLink,
} from '@tabler/icons-react';
import type { ReactElement } from 'react';

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
