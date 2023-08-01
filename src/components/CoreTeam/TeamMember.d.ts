export interface TeamMember {
  Avatar: ComponentType<SVGProps<SVGSVGElement>>;
  name: string;
  role: string;
  email: string;
  slack: { mention: string; id: string };
  Description?: () => ReactElement;
}
