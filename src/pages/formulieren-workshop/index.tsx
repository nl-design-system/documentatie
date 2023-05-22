import React from 'react';
import { PageContent, UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import { Heading1 } from '@utrecht/component-library-react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title} - homepage`}>
      <PageContent>
        <Heading1>Formulieren Workshop - 23 mei 2023</Heading1>
        <UnorderedList>
          <UnorderedListItem>
            <Link className="utrecht-link" to="formulieren-workshop/voorbeeld-met-fouten-1">
              Voorbeeld formulier
            </Link>
          </UnorderedListItem>
        </UnorderedList>
      </PageContent>
    </Layout>
  );
};

export default Home;
