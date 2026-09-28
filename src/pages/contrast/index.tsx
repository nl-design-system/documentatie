import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ContrastTool } from '@site/src/components/ContrastTool';
import Layout from '@theme/Layout';

const ContrastPage = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout>
      <head>
        <title>Contrast van kleuren - {siteConfig.title}</title>
      </head>
      <ContrastTool />
    </Layout>
  );
};

export default ContrastPage;
