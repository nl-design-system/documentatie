import Head from '@docusaurus/Head';
import { BrowserOnly } from '@site/src/components/BrowserOnly';
import '@nl-design-system-community/ma-design-tokens/dist/theme.css';
import '@utrecht/component-library-css/dist/index.css';
import '@utrecht/design-tokens/dist/theme.css';
import '@nl-design-system-community/editor/theme.css';
import { lazy, Suspense } from 'react';

const ClippyContentView = lazy(() =>
  import('@nl-design-system-community/editor-react').then((module) => ({
    default: module.ClippyContentView,
  })),
);

const pageStyle = {
  backgroundColor: 'white',
  minHeight: '100vh',
};

export default function CmsEnPlainHtmlPage() {
  return (
    <>
      <Head>
        <title>Plain HTML voorbeeld | Clippy Content View</title>
        <meta
          name="description"
          content="Plain HTML voorbeeldpagina zonder site header en footer, gerenderd in ClippyContentView."
        />
      </Head>
      <BrowserOnly>
        {() => (
          <Suspense fallback="Voorbeeld laden...">
            <div className="ma-theme clippy-theme utrecht-root" style={pageStyle}>
              <ClippyContentView>
                <div slot="value">
                  <h1>NL Design System Editor — voorbeeld</h1>
                  <p>
                    Onder die steden, <strong>welke</strong> <em>vanouds</em> aan de
                    <strong>
                      <em>grafelijke</em>
                    </strong>{' '}
                    kroon van Holland gelijk zoovele edelgesteenten flonkerden, en wier macht en rijkdom tot een hechten
                    steun verstrekten aan des Landsheer gezag, was Haarlem, gelijk genoeg bekend is, een der
                    voornaamste.
                  </p>

                  <h3>Ligging en handel</h3>
                  <p>
                    Aan den over eener rivier gebouwd, waarvan zij zich als van twee armen bedienen kon, om, aan de eene
                    zijde, het Haarlemmermeer en de daarom gelegen landen, aan de andere zij IJ, en door het IJ, de
                    Zuiderzee te bereiken, had zij van deze gunstige ligging reeds vroeg partij getrokken, om een
                    <a href="https://example.com">handel te drijven</a>.
                  </p>
                </div>
              </ClippyContentView>
            </div>
          </Suspense>
        )}
      </BrowserOnly>
    </>
  );
}
