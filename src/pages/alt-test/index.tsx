import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { OrderedList, OrderedListItem, Link } from '@utrecht/component-library-react';
import { PageContent, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import { Heading1 } from '@utrecht/component-library-react/dist/css-module';

const TestPage = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout>
      <head>
        <title>Contrast van kleuren - ${siteConfig.title}</title>
      </head>
      <PageContent
        style={{
          '--utrecht-space-around': 1,
          maxInlineSize: '600px',
          marginInlineEnd: 'auto',
          marginInlineStart: 'auto',
        }}
      >
        <Heading1>Afbeeldingen</Heading1>
        <Paragraph>
          Bepaal per afbeelding of er een alt-tekst bij moet en wat de inhoud van die tekst moet zijn
        </Paragraph>
        <OrderedList>
          <OrderedListItem>
            <Link href="https://www.onbekend-talent.nl/leer-werk-traject-bij-mas-zone-3-in-amsterdam">Voorbeeld 0</Link>{' '}
            (Opwarmertje)
          </OrderedListItem>
          <OrderedListItem>
            <Link href="https://www.denhaag.nl/nl/">Voorbeeld 1</Link> (Zoek)
          </OrderedListItem>
          <OrderedListItem>
            <Link href="https://www.7poort.nl/">Voorbeeld 2</Link>(Tekst in header))
          </OrderedListItem>
          <OrderedListItem>
            <Link href="https://www.7poort.nl/">Voorbeeld 3a</Link>(Kaart)
          </OrderedListItem>
          <OrderedListItem>
            <Link href="https://activiteiten.amsterdam.nl/activiteiten/2025/10/stem-plannen-west-begroot!/">
              Voorbeeld 3b
            </Link>{' '}
            (Afbeelding)
          </OrderedListItem>
          <OrderedListItem>
            <Link href="https://8rhk.nl/ruimtelijk-perspectief-achterhoek/">Voorbeeld 3c</Link> (Meerdere afbeeldingen)
          </OrderedListItem>
          <OrderedListItem>
            <Link href="https://ammatch.nl/artikelen/we-werken-graag-met-partners-die-mensen-verder-helpen/"></Link>{' '}
            (Afbeelding)
          </OrderedListItem>
          <OrderedListItem>
            <Link href="https://www.snn.nl/valorisatie-2025">Voorbeeld 5</Link>(Stappen)
          </OrderedListItem>
          <OrderedListItem>
            <Link href="https://www.spna.nl/nieuws/aanmelden-rassenproeven-2026-granen-en-koolzaad/">Voorbeeld 7</Link>{' '}
            (Afbeelding onderin)
          </OrderedListItem>
          <OrderedListItem>Decoratief en klikbaar</OrderedListItem>
          <OrderedListItem>
            <Link href="https://www.denhaag.nl/nl/">Voorbeeld 8</Link> (Logo)
          </OrderedListItem>
          <OrderedListItem>
            <Link href="https://authn.denhaag.nl/realms/zgw-publiek/protocol/openid-connect/auth?client_id=klantportaal&redirect_uri=https%3A%2F%2Fklantportaal.denhaag.nl%2Foidc%2Fcallback&response_type=code&scope=openid&state=1946df6bf91c4312881930dfcf9d51fa&code_challenge=JcTk51oW_0yvU_0_nrP8j1yznAy9snBlH97PQqEgVhw&code_challenge_method=S256">
              Voorbeeld 9
            </Link>{' '}
            (DigId)
          </OrderedListItem>
          <OrderedListItem>
            <Link href="https://www.stichtingerfgoedgennep.nl/">Voorbeeld 10</Link> (Nieuwsgierig?)
          </OrderedListItem>
          <OrderedListItem>
            <Link href="https://www.snn.nl/kennisbank/publiciteitseisen-just-transition-fund-jtf">Voorbeeld 11</Link>
            (Afbeelding)
          </OrderedListItem>
          <OrderedListItem>
            <Link href="https://www.nlvoorelkaar.nl/">
              Voorbeeld 12 (Afbeeldingen bij Talenten en Vrijwilligerswerk)
            </Link>
          </OrderedListItem>
        </OrderedList>
      </PageContent>
    </Layout>
  );
};

export default TestPage;
