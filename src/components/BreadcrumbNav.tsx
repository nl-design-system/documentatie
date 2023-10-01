import {
  BreadcrumbNav as UtrechtBreadcrumbNav,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Icon,
} from '@utrecht/component-library-react/dist/css-module';

export interface BreadcrumbNavProps {
  breadcrumbs: { label: string; href: string }[];
}

export const BreadcrumbNav = ({ breadcrumbs, ...restProps }) => (
  <UtrechtBreadcrumbNav {...restProps}>
    {breadcrumbs.map(({ label, href }, index, { length }) => (
      <>
        <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
        {index < length && <BreadcrumbSeparator>/</BreadcrumbSeparator>}
      </>
    ))}
  </UtrechtBreadcrumbNav>
);
