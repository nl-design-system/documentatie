import { Icon } from '@utrecht/component-library-react';
import { BrandFigma, BrandGithub, BrandNpm, BrandStorybook, ExternalLink } from 'tabler-icons-react';

const brandMap = {
  figma: <BrandFigma />,
  github: <BrandGithub />,
  npm: <BrandNpm />,
  storybook: <BrandStorybook />,
};

interface BrandIconProps {
  brand: string;
}

export const BrandIcon = ({ brand }: BrandIconProps) => <Icon>{brandMap[brand] || <ExternalLink />}</Icon>;
