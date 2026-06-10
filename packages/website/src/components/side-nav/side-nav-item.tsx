export function SideNavItem({ label, href }: { label: string; href: string }) {
  return <li>{href ? <a href={href}>{label}</a> : label}</li>;
}
