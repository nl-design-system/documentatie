import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageHero from '../components/HomepageHero';
import { Card, CardSection, CardGroup, CardIllustration } from '../components/CardGroup';
import { HomepageFooter } from '../components/HomepageFooter';
import DocusaurusLink from '@docusaurus/Link';
import {
  Heading2,
  Heading3,
  Image,
  Link,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import HomepageUpdates from '../components/HomepageUpdates';

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
              <CardSection>
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
              </CardSection>
            </Card>

            <Card>
              <CardSection>
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
              </CardSection>
            </Card>

            <Card>
              <CardSection>
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
              </CardSection>
            </Card>

            <Card>
              <CardSection>
                <div>
                  <Heading2>Videos</Heading2>
                  <Paragraph>
                    Niet gelukt om bij de heartbeat te zijn? Of zin om een sessie van de design system week te kijken?
                    De meesten hebben we opgenomen.
                  </Paragraph>
                </div>
                <Paragraph>
                  <DocusaurusLink to="/videos" className="utrecht-link">
                    Bekijk de videos
                  </DocusaurusLink>
                </Paragraph>
              </CardSection>
            </Card>
          </CardGroup>

          <Heading2>Meedoen als...</Heading2>

          <CardGroup>
            <Card>
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__organisatie.svg"
                  alt="Drie verschillende avatars bij elkaar als organisatie"
                />
              </CardIllustration>
              <CardSection>
                <div>
                  <Heading3>Organisatie</Heading3>
                </div>
                <Paragraph>
                  <DocusaurusLink to="/meedoen/introductie" className="utrecht-link">
                    Meer informatie voor organisaties
                  </DocusaurusLink>
                </Paragraph>
              </CardSection>
            </Card>
            <Card>
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__leverancier.svg"
                  alt="Drie verschillende avatars bij elkaar als leverancier"
                />
              </CardIllustration>
              <CardSection>
                <div>
                  <Heading3>Leverancier</Heading3>
                </div>
                <Paragraph>
                  <DocusaurusLink to="/meedoen/als-leverancier/overzicht" className="utrecht-link">
                    Meer informatie voor leveranciers
                  </DocusaurusLink>
                </Paragraph>
              </CardSection>
            </Card>
            <Card>
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__developer.svg"
                  alt="Avatar als developer"
                />
              </CardIllustration>
              <CardSection>
                <div>
                  <Heading3>Developer</Heading3>
                </div>
                <Paragraph>
                  <DocusaurusLink to="/meedoen/als-developer/overzicht" className="utrecht-link">
                    Meer informatie voor developers
                  </DocusaurusLink>
                </Paragraph>
              </CardSection>
            </Card>
            <Card>
              <CardIllustration>
                <Image
                  src="https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__designer.svg"
                  alt="Avatar als designer"
                />
              </CardIllustration>
              <CardSection>
                <div>
                  <Heading3>Designer</Heading3>
                </div>
                <Paragraph>
                  <DocusaurusLink to="/meedoen/als-designer/overzicht" className="utrecht-link">
                    Meer informatie voor designers
                  </DocusaurusLink>
                </Paragraph>
              </CardSection>
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
            <Card>
              <CardSection>
                <div>
                  <Heading3>Nieuwsbrief</Heading3>
                  <Paragraph>
                    Meld je aan voor de nieuwsbrief en ontvang elke maand een update van de ontwikkelingen rondom het NL
                    Design System.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link href="https://designsystem.gebruikercentraal.nl/nieuwsbrieven/">
                    Meld je aan voor de nieuwsbrief
                  </Link>
                </Paragraph>
              </CardSection>
            </Card>
            <Card>
              <CardSection>
                <div>
                  <Heading3>Heartbeat</Heading3>
                  <Paragraph>
                    Sluit aan bij de 2-wekelijkse online bijeenkomst waarbij ontwikkelingen rondom het NL Design System
                    worden besproken.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Link href="https://www.gebruikercentraal.nl/agenda/soort/nl-design-system/">
                    Meld je aan voor de heartbeat
                  </Link>
                </Paragraph>
              </CardSection>
            </Card>
          </CardGroup>
        </HomepageUpdates>
        <HomepageFooter />
      </main>
    </Layout>
  );
}
