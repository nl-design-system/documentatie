import Layout from '@theme/Layout';
import { UtrechtHeading1, UtrechtPageContent } from '@utrecht/web-component-library-react';
import clsx from 'clsx';
import React from 'react';

const WmebvPage = () => {
  return (
    <Layout>
      <UtrechtPageContent className={clsx('voorbeeld-theme')}>
        <main>
          <UtrechtHeading1>Voorbeeld</UtrechtHeading1>
        </main>
      </UtrechtPageContent>
    </Layout>
  );
};

export default WmebvPage;
