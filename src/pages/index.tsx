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
            webapplicaties voor de digitale overheid te bouwen.
          </Paragraph>

          <Paragraph>
            NL Design System helpt om toegankelijk, inclusief en gebruiksvriendelijk ontwikkelen makkelijk te maken.{' '}
          </Paragraph>

          <UnorderedList>
            <UnorderedListItem>Gebouwd en gebruikt door de community (voor en door de overheid).</UnorderedListItem>
            <UnorderedListItem>Platformonafhankelijk en voor iedere huisstijl.</UnorderedListItem>
            <UnorderedListItem>Uitbreidbaar en publiek beschikbaar.</UnorderedListItem>
          </UnorderedList>
        </HomepageHero>
        <div className="container" style={{ paddingBlockEnd: '40px' }}>
          <Heading2>Meedoen als...</Heading2>
          <CardGroup appearance="medium">
            <Card component="section" appearance="medium">
              <CardContent>
                <div>
                  <Heading3>Manager</Heading3>
                </div>
                <Paragraph>
                  <DocusaurusLink to="/handboek/manager/introductie" className="utrecht-link">
                    Meer informatie voor managers
                  </DocusaurusLink>
                </Paragraph>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium">
              <CardContent>
                <div>
                  <Heading3>Leverancier</Heading3>
                </div>
                <Paragraph>
                  <DocusaurusLink to="/handboek/leverancier/introductie" className="utrecht-link">
                    Meer informatie voor leveranciers
                  </DocusaurusLink>
                </Paragraph>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium">
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
                  alt="Gemeente Utrecht logo, naar Gemeente Utrecht op GitHub"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/denhaag">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__denhaag.svg"
                  alt="Gemeente Den Haag logo, naar Gemeente Den Haag op GitHub"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/amsterdam">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__amsterdam.svg"
                  alt="Gemeente Amsterdam logo, naar Gemeente Amsterdam op GitHub"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/rotterdam">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__rotterdam.svg"
                  alt="Gemeente Rotterdam logo, naar Gemeente Rotterdam op GitHub"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/tilburg">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__tilburg.png"
                  alt="Gemeente Tilburg logo, naar Gemeente Tilburg op GitHub"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/rvo">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__rvo.svg"
                  alt="Rijksdienst voor Ondernemend Nederland logo, naar RVO op GitHub"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/lux">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__logius.png"
                  alt="Logius logo, naar LUX op GitHub"
                />
              </CardIllustration>
            </Card>
            <Card appearance="small" href="https://github.com/nl-design-system/rijkshuisstijl-community">
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__rijkshuisstijl-community.png"
                  alt="Rijkshuisstijl Community logo, naar Rijkshuisstijl Community op GitHub"
                />
              </CardIllustration>
            </Card>
          </CardGroup>
          <Paragraph className="homepage__paragraph">
            Naast de organisaties die componenten bijdragen doen{' '}
            <DocusaurusLink to="/community/wie-doet-mee" className="utrecht-link">
              diverse andere organisaties
            </DocusaurusLink>{' '}
            mee in de community van NL Design System.
          </Paragraph>
        </div>
        <div className="container" style={{ paddingBlockStart: '40px', paddingBlockEnd: '40px' }}>
          <CardGroup>
            <Card component="section" appearance="medium">
              <CardContent>
                <div>
                  <Heading2>Richtlijnen</Heading2>
                  <Paragraph>
                    Fundamentele richtlijnen voor het toepassen van stijl elementen zoals typografie, kleuren en iconen.
                  </Paragraph>
                </div>
                <Paragraph>
                  <DocusaurusLink to="/richtlijnen" className="utrecht-link">
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
                  <Heading2>Bijeenkomsten</Heading2>
                  <Paragraph>
                    Benieuwd naar de bijeenkomsten van NL Design System? Of niet gelukt om bij de Heartbeat te zijn?
                    Bekijk de aankondigingen en opnames hier.
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
        </div>
        <HomepageUpdates>
          <Heading2>Blijf op de hoogte</Heading2>
          <CardGroup>
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
                  <Link href="/events/heartbeat/aanmelden">Meld je aan voor de Heartbeat</Link>
                </Paragraph>
              </CardContent>
            </Card>
            <Card component="section" appearance="medium">
              <CardContent>
                <div>
                  <Heading3>Design Open Hour</Heading3>
                  <Paragraph>
                    Wees welkom bij de 2-wekelijkse online bijeenkomst waar designers informatie, inzichten en tips uit
                    te wisselen.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link href="/events/design-open-hour/aanmelden">Meld je aan voor het Design Open Hour</Link>
                </Paragraph>
              </CardContent>
            </Card>
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
                  <Heading3>Blog</Heading3>
                  <Paragraph>
                    Op ons blog schrijven we over wat er speelt in het kernteam en de community. Ook kun je er meer
                    lezen over wat we doen en waarom.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link href="/blog">Lees het blog</Link>
                </Paragraph>
              </CardContent>
            </Card>
          </CardGroup>
        </HomepageUpdates>
      </main>
    </Layout>
  );
}
