import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageHero from '../components/HomepageHero';
import { Card, CardGroup } from '../components/CardGroup';
import { HomepageFooter } from '../components/HomepageFooter';
import DocusaurusLink from '@docusaurus/Link';
import {
  Heading2,
  Heading3,
  Link,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - homepage`}
      description="NL Design System samenwerken aan componenten en richtlijnen voor een begrijpelijke, gebruiksvriendelijke én toegankelijke online dienstverlening"
      wrapperClassName="marketing-page"
    >
      <main>
        <HomepageHero title="NL Design System" ctaLink="meedoen/introductie" cta="Lees alles over het NL Design System">
          <Paragraph lead>
            Dienstverlening vanuit de overheid moet toegankelijk en begrijpelijk zijn voor iedereen.
          </Paragraph>
          <Paragraph>
            NL Design System architectuur zorgt ervoor dat verschillende organisaties samenwerken aan toegankelijkheid
            en gebruiksvriendelijkheid. Terwijl iedereen vrijheid heeft voor een eigen huisstijl en eigen technologieën.
          </Paragraph>
          <UnorderedList>
            <UnorderedListItem>Gevoed met kennis vanuit de community</UnorderedListItem>
            <UnorderedListItem>Platform en huisstijl onafhankelijk</UnorderedListItem>
            <UnorderedListItem>Uitbreidbaar en publiek beschikbaar</UnorderedListItem>
          </UnorderedList>
        </HomepageHero>
        <div className="container">
          <CardGroup>
            <Card>
              <div>
                <Heading2>Richtlijnen</Heading2>
                <Paragraph>
                  Fundamentele richtlijnen voor het toepassen van stijl elementen zoals typografie, kleuren en iconen.
                  Maar ook richtlijnen voor tekst en taalgebruik.
                </Paragraph>
              </div>
              <Paragraph>
                <DocusaurusLink to="/richtlijnen/tekst-en-taalgebruik" className="utrecht-link">
                  Bekijk de richtlijnen
                </DocusaurusLink>
              </Paragraph>
            </Card>

            <Card>
              <div>
                <Heading2>Componenten</Heading2>
                <Paragraph>
                  Een overzicht van herbruikbare, toegankelijke componenten voor formulieren, navigatie, tabellen en
                  meer. Inclusief code en documentatie.
                </Paragraph>
              </div>
              <Paragraph>
                <DocusaurusLink to="/componenten" className="utrecht-link">
                  Bekijk de componenten
                </DocusaurusLink>
              </Paragraph>
            </Card>

            <Card>
              <div>
                <Heading2>Voorbeelden</Heading2>
                <Paragraph>
                  Een overzicht van patronen en templates om vaak voorkomende scenario's op een consistente,
                  weloverwogen manier op te lossen.
                </Paragraph>
              </div>
              <Paragraph>
                <DocusaurusLink to="/voorbeelden" className="utrecht-link">
                  Bekijk de voorbeelden
                </DocusaurusLink>
              </Paragraph>
            </Card>

            <Card>
              <div>
                <Heading2>Videos</Heading2>
                <Paragraph>
                  Niet gelukt om bij de heartbeat te zijn? Of zin om een sessie van de design system week te kijken? De
                  meesten hebben we opgenomen.
                </Paragraph>
              </div>
              <Paragraph>
                <DocusaurusLink to="/videos" className="utrecht-link">
                  Bekijk de videos
                </DocusaurusLink>
              </Paragraph>
            </Card>
          </CardGroup>

          <Heading2>Meedoen als...</Heading2>

          <CardGroup>
            <Card
              illustration={{
                src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__organisatie.svg',
                alt: 'Drie verschillende avatars bij elkaar als organisatie',
              }}
            >
              <div>
                <Heading3>Organisatie</Heading3>
              </div>
              <Paragraph>
                <DocusaurusLink to="/meedoen/introductie" className="utrecht-link">
                  Meer informatie voor organisaties
                </DocusaurusLink>
              </Paragraph>
            </Card>
            <Card
              illustration={{
                src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__leverancier.svg',
                alt: 'Drie verschillende avatars bij elkaar als leverancier',
              }}
            >
              <div>
                <Heading3>Leverancier</Heading3>
              </div>
              <Paragraph>
                <DocusaurusLink to="/meedoen/als-leverancier/overzicht" className="utrecht-link">
                  Meer informatie voor leveranciers
                </DocusaurusLink>
              </Paragraph>
            </Card>
            <Card
              illustration={{
                src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__developer.svg',
                alt: 'Avatar als developer',
              }}
            >
              <div>
                <Heading3>Developer</Heading3>
              </div>
              <Paragraph>
                <DocusaurusLink to="/meedoen/als-developer/overzicht" className="utrecht-link">
                  Meer informatie voor developers
                </DocusaurusLink>
              </Paragraph>
            </Card>
            <Card
              illustration={{
                src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__designer.svg',
                alt: 'Avatar als designer',
              }}
            >
              <div>
                <Heading3>Designer</Heading3>
              </div>
              <Paragraph>
                <DocusaurusLink to="/meedoen/als-designer/overzicht" className="utrecht-link">
                  Meer informatie voor designers
                </DocusaurusLink>
              </Paragraph>
            </Card>
          </CardGroup>
        </div>
        <HomepageFooter>
          <div>
            <Heading2>Over het kernteam</Heading2>
            <Paragraph>
              Het NL Design System wordt ontwikkeld door <Link href="project/contact/">een vast kernteam</Link> bij
              Gebruiker Centraal.
            </Paragraph>
          </div>
          <div>
            <Heading2>Samenwerking</Heading2>
            <Paragraph>
              Met <Link href="project/links">een community</Link> werken we aan een begrijpelijke, gebruiksvriendelijke
              én toegankelijke online dienstverlening voor overheidsorganisaties.
            </Paragraph>
          </div>
        </HomepageFooter>
      </main>
    </Layout>
  );
}
