import { Icon } from '@utrecht/component-library-react';
import {
  IconBrandFigma,
  IconBrandGithub,
  IconBrandNpm,
  IconBrandStorybook,
  IconExternalLink,
} from '@tabler/icons-react';

const brandMap = {
  figma: <IconBrandFigma />,
  github: <IconBrandGithub />,
  npm: <IconBrandNpm />,
  storybook: <IconBrandStorybook />,
};

interface BrandIconProps {
  brand: string;
}

export const BrandIcon = ({ brand }: BrandIconProps) => <Icon>{brandMap[brand] || <IconExternalLink />}</Icon>;
