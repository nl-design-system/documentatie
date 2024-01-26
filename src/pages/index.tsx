import DocusaurusLink from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {
  Heading2,
  Heading3,
  Image,
  Link,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import React from 'react';
import { Card, CardContent, CardGroup, CardIllustration } from '../components/CardGroup';
import HomepageHero from '../components/HomepageHero';
import HomepageUpdates from '../components/HomepageUpdates';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} - homepage`}
      description="NL Design System samenwerken aan componenten en richtlijnen voor een begrijpelijke, gebruiksvriendelijke én toegankelijke online dienstverlening"
      wrapperClassName="container--narrow"
    >
      <main>
        <HomepageHero
          title="Doe mee met NL Design System"
          ctaLink="handboek/introductie"
          cta="Lees de NL Design System introductie"
        >
          <Paragraph lead>
            Met een actieve community van specialisten verzamelt het kernteam de beste{' '}
            <DocusaurusLink to="/richtlijnen">richtlijnen</DocusaurusLink>,{' '}
            <DocusaurusLink to="/componenten">componenten</DocusaurusLink> en voorbeelden om robuuste websites en
            webapplicaties te bouwen.
          </Paragraph>

          <Paragraph>
            NL Design System helpt om toegankelijk, inclusief en gebruiksvriendelijk ontwikkelen makkelijk te maken.{' '}
          </Paragraph>

          <UnorderedList>
            <UnorderedListItem>Gebouwd en gebruikt door de community.</UnorderedListItem>
            <UnorderedListItem>Platformonafhankelijk en voor iedere huisstijl.</UnorderedListItem>
            <UnorderedListItem>Uitbreidbaar en publiek beschikbaar.</UnorderedListItem>
          </UnorderedList>
        </HomepageHero>
        <div className="container" style={{ paddingBlockEnd: '40px' }}>
          <CardGroup>
            <Card component="section" appearance="medium">
              <CardContent>
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
              </CardContent>
            </Card>

            <Card component="section" appearance="medium">
              <CardContent>
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
              </CardContent>
            </Card>

            <Card component="section" appearance="medium">
              <CardContent>
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
              </CardContent>
            </Card>

            <Card component="section" appearance="medium">
              <CardContent>
                <div>
                  <Heading2>Events</Heading2>
                  <Paragraph>
                    Benieuwd naar de events van NL Design System? Of niet gelukt om bij de heartbeat te zijn? Bekijk de
                    aankondigingen en opnames hier.
                  </Paragraph>
                </div>
                <Paragraph>
                  <DocusaurusLink to="/community/events/overzicht" className="utrecht-link">
                    Bekijk de events
                  </DocusaurusLink>
                </Paragraph>
              </CardContent>
            </Card>
          </CardGroup>

          <Heading2>Meedoen als...</Heading2>

          <CardGroup>
            <Card component="section" appearance="medium">
              {/* <CardIllustration background>
                <Image
                  src="..."
                  alt="..."
                />
              </CardIllustration> */}
              <CardContent>
                <div>
                  <Heading3>Organisatie</Heading3>
                </div>
                <Paragraph>
                  <DocusaurusLink to="/handboek/introductie" className="utrecht-link">
                    Meer informatie voor organisaties
                  </DocusaurusLink>
                </Paragraph>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium">
              {/* <CardIllustration background>
                <Image
                  src="..."
                  alt="..."
                />
              </CardIllustration> */}
              <CardContent>
                <div>
                  <Heading3>Leverancier</Heading3>
                </div>
                <Paragraph>
                  <DocusaurusLink to="/handboek/leverancier/overzicht" className="utrecht-link">
                    Meer informatie voor leveranciers
                  </DocusaurusLink>
                </Paragraph>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium">
              {/* <CardIllustration background>
                <Image
                  src="..."
                  alt="..."
                />
              </CardIllustration> */}
              <CardContent>
                <div>
                  <Heading3>Developer</Heading3>
                </div>
                <Paragraph>
                  <DocusaurusLink to="/handboek/developer/overzicht" className="utrecht-link">
                    Meer informatie voor developers
                  </DocusaurusLink>
                </Paragraph>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium">
              {/* <CardIllustration background>
                <Image
                  src="..."
                  alt="..."
                />
              </CardIllustration> */}
              <CardContent>
                <div>
                  <Heading3>Designer</Heading3>
                </div>
                <Paragraph>
                  <DocusaurusLink to="/handboek/designer/overzicht" className="utrecht-link">
                    Meer informatie voor designers
                  </DocusaurusLink>
                </Paragraph>
              </CardContent>
            </Card>
          </CardGroup>

          <Heading2>Wie doen er al mee?</Heading2>
          <CardGroup appearance="small">
            <Card appearance="small" href="https://github.com/nl-design-system/utrecht">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__utrecht.svg"
                  alt="Utrecht logo"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/denhaag">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__denhaag.svg"
                  alt="Den Haag logo"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/rvo">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__rvo.svg"
                  alt="RVO logo"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/amsterdam">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__amsterdam.svg"
                  alt="Amsterdam logo"
                />
              </CardIllustration>
            </Card>
          </CardGroup>
          <Paragraph className="homepage__paragraph">
            En ruim 20 <Link href="https://github.com/nl-design-system/themes">organisaties met een eigen thema</Link>
          </Paragraph>
        </div>
        <HomepageUpdates>
          <Heading2>Blijf op de hoogte</Heading2>
          <CardGroup>
            <Card component="section" appearance="medium">
              <CardContent>
                <div>
                  <Heading3>Nieuwsbrief</Heading3>
                  <Paragraph>
                    Meld je aan voor de nieuwsbrief en ontvang elke maand een update van de ontwikkelingen rondom het NL
                    Design System.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link href="/project/blijf-op-de-hoogte#nieuwsbrief">Meld je aan voor de nieuwsbrief</Link>
                </Paragraph>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium">
              <CardContent>
                <div>
                  <Heading3>Heartbeat</Heading3>
                  <Paragraph>
                    Sluit aan bij de 2-wekelijkse online bijeenkomst waarbij ontwikkelingen rondom het NL Design System
                    worden besproken.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link href="/events/heartbeat/aanmelden">Meld je aan voor de heartbeat</Link>
                </Paragraph>
              </CardContent>
            </Card>
          </CardGroup>
        </HomepageUpdates>
      </main>
    </Layout>
  );
}
