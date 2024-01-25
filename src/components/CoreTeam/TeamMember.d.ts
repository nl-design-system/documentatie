import { ComponentType, Element, SVGProps } from 'react';
export interface TeamMember {
  Avatar?: ComponentType<SVGProps<SVGSVGElement>>;
  name: string;
  role: string;
  slack: { mention: string; id: string };
  Description?: () => Element;
}
