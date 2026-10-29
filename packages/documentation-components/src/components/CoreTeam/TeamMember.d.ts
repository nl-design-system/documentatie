import { ComponentType, SVGProps, type JSXElementConstructor } from 'react';
export interface TeamMember {
  Avatar?: ComponentType<SVGProps<SVGSVGElement>>;
  name: string;
  role: string;
  slack: { mention: string; id: string };
  Description: () => JSXElementConstructor;
}
