import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { PageContent } from '@utrecht/component-library-react/dist/css-module';
import { Heading1 } from '@utrecht/component-library-react/dist/css-module';
import './index.css';
import AltTextHelper from './alt-text-helper';

const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title} - alt-tekst helper`}>
      <PageContent>
        <Heading1>Alt-tekst helper</Heading1>

        <AltTextHelper />
      </PageContent>
    </Layout>
  );
};

export default Home;
