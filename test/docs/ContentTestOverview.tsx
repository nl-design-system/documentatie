import { Link } from '@nl-design-system-community/documentation-components/src/link/link';
import { UnorderedList } from '@nl-design-system-community/documentation-components/src/unordered-list/unordered-list';

interface ContentTestPage {
  id: string;
  data: {
    title: string;
  };
}

interface ContentTestOverviewProps {
  pages: ContentTestPage[];
}

export const ContentTestOverview = ({ pages }: ContentTestOverviewProps) => {
  const sorted = pages
    .filter((page) => page.id !== '/private/content-test/')
    .sort((a, b) => a.data.title.localeCompare(b.data.title));

  return (
    <UnorderedList>
      {sorted.map((page) => (
        <UnorderedList.Item key={page.id}>
          <Link href={`${page.id}/`}>{page.data.title}</Link>
        </UnorderedList.Item>
      ))}
    </UnorderedList>
  );
};
